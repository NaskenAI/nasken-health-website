import { Writable } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { AppRoutes } from "./App";

export type Rendered = { html: string; head: string };

/**
 * Renders one route to HTML at build time.
 *
 * renderToPipeableStream with onAllReady is used rather than renderToString
 * because the routes are React.lazy: renderToString cannot resolve a lazy
 * component and would emit the Suspense fallback (nothing) for every page
 * except the eagerly imported home route.
 */
export function render(url: string): Promise<Rendered> {
  const helmetContext: { helmet?: HelmetServerState } = {};

  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const sink = new Writable({
      write(chunk, _enc, cb) {
        chunks.push(Buffer.from(chunk));
        cb();
      },
    });

    sink.on("finish", () => {
      const { helmet } = helmetContext;
      resolve({
        html: Buffer.concat(chunks).toString("utf8"),
        head: [
          helmet?.title.toString(),
          helmet?.meta.toString(),
          helmet?.link.toString(),
        ]
          .filter(Boolean)
          .join("\n    "),
      });
    });

    const { pipe, abort } = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </HelmetProvider>,
      {
        onAllReady() {
          pipe(sink);
        },
        onError(error) {
          abort();
          reject(error);
        },
      }
    );
  });
}

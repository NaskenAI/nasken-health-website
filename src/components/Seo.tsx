import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.naskenhealth.com";

type SeoProps = {
  title: string;
  description: string;
  /** Route path, e.g. "/team". Omit for pages that must not be indexed. */
  path?: string;
  noindex?: boolean;
};

/**
 * Per-route head tags. og:site_name, theme-color and twitter:card stay in
 * index.html as site-wide defaults; anything set here overrides the
 * index.html value for that route.
 */
export default function Seo({ title, description, path, noindex }: SeoProps) {
  const url = path ? `${SITE_URL}${path}` : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {noindex ? <meta name="robots" content="noindex, follow" /> : null}
      {url ? <link rel="canonical" href={url} /> : null}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url ? <meta property="og:url" content={url} /> : null}

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

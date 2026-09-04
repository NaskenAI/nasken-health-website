# Nasken Health — website

Marketing site for **Nasken Health**, a unit of Nasken Inc., a Boston-based
digital health startup building AI tools for remote patient monitoring, therapy
summarization, and clinical analytics.

**Live:** [www.naskenhealth.com](https://www.naskenhealth.com) — that is the
canonical domain. Every `<link rel="canonical">` on the site points at
`https://www.naskenhealth.com`.

> **This repo is edited through git.** It was originally scaffolded by Lovable,
> but Lovable no longer syncs to it and all of its tooling has been removed.
> Nothing here is overwritten by an external tool — git is the only source of
> truth, and CI is the only thing that catches a broken push.

## Stack

| | |
|---|---|
| Build | Vite 7 |
| Language | TypeScript 5.9, `strict` enabled |
| UI | React 18, Tailwind CSS 3.4 |
| Routing | react-router-dom 7 (`BrowserRouter`) |
| Head tags | react-helmet-async 3 |
| Components | shadcn-ui on Radix primitives |
| Icons | lucide-react |
| Lint | ESLint 9 flat config, typescript-eslint, react-hooks, jsx-a11y |
| Format | Prettier 3 |
| Hosting | Vercel, with one serverless function under `api/` |

## Running locally

Node 22 is required; the version is pinned in both `.nvmrc` and `engines`.

```sh
nvm use            # reads .nvmrc
npm ci
npm run dev        # http://localhost:8080
```

## Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Vite dev server on port 8080 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the built output |
| `npm run typecheck` | `tsc -b --noEmit` |
| `npm run lint` | ESLint over the repo |
| `npm run format` | Rewrite files with Prettier |
| `npm run format:check` | Fail if anything is unformatted |

## Environment variables

Copy `.env.example` to `.env.local` for local work. In production these are set
in the Vercel project settings. `.env.local` is gitignored; never commit a key.

| Variable | Used by | Purpose |
|---|---|---|
| `RESEND_API_KEY` | `api/contact.ts` | Resend API key used to send form submissions |
| `CONTACT_TO` | `api/contact.ts` | Inbox that receives submissions |

The `from` address in `api/contact.ts` is `no-reply@nasken.ai`, so **nasken.ai
must be a verified sending domain in Resend** or every send is rejected. With
either variable unset the endpoint returns 500 and the forms show their error
state, which points the user at `contact@nasken.ai`.

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/team` | Team |
| `/careers` | Careers |
| `/fellowships` | Fellowship programme |
| `/news/nvidia-inception` | NVIDIA Inception announcement |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |

`/contact` permanently redirects to `/careers`. Anything else renders the
404 page, which is `noindex`.

Per-route `<title>`, description, canonical and Open Graph tags come from
`src/components/Seo.tsx`, used once per route in `src/App.tsx`. `index.html`
holds only the site-wide defaults (`og:site_name`, `theme-color`,
`twitter:card`) and a crawlable `<noscript>` fallback.

## CI

`.github/workflows/ci.yml` runs on every pull request to `main` and on pushes
to `main`: `npm ci`, then typecheck, lint, format check and build. It uses the
Node version from `.nvmrc`.

## Deployment

Vercel builds from `main` and deploys to `www.naskenhealth.com`.

`vercel.json` holds the SPA rewrite (excluding `/api`, `/assets` and anything
with a file extension, so real files are still served), the `/contact`
redirect, and the security headers: HSTS, `X-Content-Type-Options`,
`Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`, and a
Content-Security-Policy in **report-only** mode.

Because the site is client-rendered, crawlers and link unfurlers that do not
execute JavaScript see the `<noscript>` block in `index.html` rather than
per-route content.

## Licence

See [LICENSE](./LICENSE).

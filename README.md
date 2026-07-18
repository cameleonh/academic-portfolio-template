# Academic Portfolio Template

A reusable bilingual academic portfolio built with Next.js. It includes English
and Korean routes, a dark mode, text-size controls, responsive navigation,
research and publication pages, an online CV, and automatic GitHub Pages
deployment.

## Use this template

1. Select **Use this template** on GitHub and create a repository.
2. Clone the new repository.
3. Install dependencies and start the local site:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Customize

The visible sample data is intentionally concentrated in a few files:

| Content | File |
|---|---|
| Name, biography, contact links, research areas, projects, awards | `src/content/portfolio.ts` |
| Publications and works in progress | `src/content/publications.ts` |
| Site URL, Scholar, ORCID, and social metadata | `src/content/site.ts` |
| English and Korean interface copy | `src/content/i18n.ts` |
| Profile placeholder | `public/profile-placeholder.svg` |
| Social preview | `public/social-preview.svg` |
| Visual tokens and component rules | `DESIGN.md` and `src/styles/globals.css` |

Replace the placeholder SVG with a portrait using the same filename, or update
`site.profileImage` and `site.profileImageUrl` in `src/content/site.ts`.

## Verify locally

```bash
npm run build
```

The static export is written to `out/`.

## Deploy to GitHub Pages

The included workflow builds and deploys on every push to `main`.

1. Open the repository's **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push to `main`.

The workflow automatically configures a project-page base path from the
repository name. If the repository is named `<username>.github.io`, remove
`NEXT_PUBLIC_BASE_PATH` from `.github/workflows/deploy.yml` because a user site
is served from the domain root.

For a custom domain, set `NEXT_PUBLIC_SITE_URL` to the domain, remove
`NEXT_PUBLIC_BASE_PATH`, and add your own `public/CNAME`.

## Project structure

```text
.github/workflows/  GitHub Pages deployment
public/             Fonts and replaceable SVG assets
src/components/     Shared interface components
src/content/        Profile and publication data
src/pages/          English routes and generated Korean counterparts
src/styles/         Global design tokens and component styles
```

## License

MIT

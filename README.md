# nbegetis.com — Nikolas Begetis's personal site (Gatsby)

[![CI](https://github.com/nmpegetis/nbegetis.com-gatsby/actions/workflows/ci.yml/badge.svg)](https://github.com/nmpegetis/nbegetis.com-gatsby/actions)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

This repository powers the personal site at https://nbegetis.com. It's a small Gatsby site with blog/project pages, a "Now" page and some utility pages.

This README is geared toward contributors who want to run, enhance, audit, or deploy the site.

---

## 🚀 Quick start

Prerequisites:

- Node.js 18+ (Node 20 used in CI)
- Yarn (or npm)
- npx (available in npm >= 5.2) for running audit tools

Install deps:

```bash
yarn install
# or: npm install
```

Run in development:

```bash
yarn develop
# or: npm run develop
```

Build for production:

```bash
yarn build
# or: npm run build
```

Serve built site locally (production-like):

```bash
yarn serve
# or: npx http-server public -p 8080
```

---

## 🧰 Scripts you should know about

Useful scripts (run with `yarn <script>` or `npm run <script>`):

- `develop` — start local dev server
- `build` — build static site into `public/`
- `serve` — serve built site (`gatsby serve`)
- `lint` — run ESLint (`src/**/*.{js,jsx}`)
- `lint:fix` — run ESLint with `--fix`
- `format` — run Prettier
- `audit:pa11y` — run Pa11y against `http://127.0.0.1:8080` (requires `public/` served)
- `audit:lighthouse` — run Lighthouse and save JSON report (requires `public/` served)
- `audit:local` — runs Pa11y and Lighthouse locally (uses `npx`)

Example:

```bash
# build+serve then run local audits
yarn build
npx http-server public -p 8080 &
yarn audit:local
```

---

## 🔎 Linting & style

ESLint runs in CI and is configured to fail the build if there are any errors or warnings (see `.github/workflows/ci.yml`). Use:

```bash
yarn lint --max-warnings=0
```

Prettier is used for formatting:

```bash
yarn format
```

---

## 🧪 Audits (Accessibility & Performance)

We run Lighthouse and Pa11y in CI (artifact: `audit-reports`). Use these tools locally to reproduce findings.

Local quick commands:

```bash
# Pa11y accessibility scan (JSON)
# pa11y reads `pa11y.json` in the project root (we set chrome args there for CI)
npx -y pa11y http://127.0.0.1:8080 --config ./pa11y.json --reporter json > reports/pa11y.json 2> reports/pa11y.err.txt

# Lighthouse JSON report
npx -y lighthouse http://127.0.0.1:8080 --output=json --output-path=reports/lighthouse.json --chrome-flags="--no-sandbox --headless"
```

Notes:
- The repo contains `pa11y.json` which sets Chrome launch args (useful on CI where sandboxing is restricted).
- When running Pa11y in CI we also save `reports/pa11y.err.txt` (stderr) and `reports/pa11y.exit` (exit code) to help debug runtime problems.
- If your local `npx`/`npm` environment is flaky, run the audit workflow in GitHub Actions instead — it runs the same checks and uploads the reports as artifacts.

---

## ✅ Contributing

1. Open an issue describing what you'd like to change or fix.
2. Create a topic branch: `git checkout -b feat/your-feature` or `fix/description`.
3. Make small, well-scoped commits and keep CI green (lint + build + audits as applicable).
4. Open a PR referencing the issue and include verification steps and (if relevant) audit JSONs.

Guidelines:

- Keep changes small and focused.
- When adding content, follow the existing content patterns under `src/content/`.
- For accessibility changes, attach Pa11y/Lighthouse JSON when possible.

---

## 📝 Known TODOs & Issues

There are inline TODOs in the codebase (tags UI, Credits cleanup, Now query optimization, photo previews, i18n, fitness integrations, etc.). Many are filed as issues. Please claim an issue before starting work.

---

## 📦 Deploy

This site can be deployed on Netlify, Vercel, or any static host. The repository contains `netlify.toml` for Netlify deploys.

---

## 🧾 License

MIT — see `LICENSE`.

---

If you'd like, I can add `CONTRIBUTING.md` and issue/PR templates to standardize contribution flow — say the word and I'll add them.

<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's hello-world starter
</h1>

Kick off your project with this hello-world boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the hello-world starter.

    ```shell
    # create a new Gatsby site using the hello-world starter
    gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-hello-world-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## Audits (Lighthouse & Accessibility)

We run Lighthouse and Pa11y audits in CI and upload JSON reports as artifacts (`audit-reports`).

To run the audits locally:

- Build the site: `yarn build`
- Serve the `public/` folder: `npx http-server public -p 8080`
- Run Lighthouse (saves JSON):
  - `npx -y lighthouse http://127.0.0.1:8080 --output=json --output-path=reports/lighthouse.json --chrome-flags="--no-sandbox --headless"`
- Run Pa11y (saves JSON):
  - `npx -y pa11y http://127.0.0.1:8080 --reporter json > reports/pa11y.json`

Note: If local npx/npm commands fail due to your environment (Node/npm incompatibilities), run the audit workflow in GitHub Actions instead — it runs the same checks and uploads the reports as build artifacts.
## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-hello-world)

<!-- AUTO-GENERATED-CONTENT:END -->

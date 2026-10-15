# aap-example-bun

A minimal **Bun** app, kept as a deploy example for [AI Admin Panel](https://aiadminpanel.com).

AI Admin Panel deploys it from this repository with **Git Deploy** (and **AI Deploy**) and checks
the result regularly: the page at `/` must contain the marker `aap-example:bun`. Use it to see how
your own Bun project is built, or as a starting point.

A Bun server with no framework: `bun run index.ts`. Dependencies are locked in `bun.lock`.

- The app listens on `$PORT` (default 8080).
- No secrets in this repository.
- License: MIT.

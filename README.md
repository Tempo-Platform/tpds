## TPDSnext

This is the upcoming version of TPDS. Work in progress!

## Objective

The aims of this transition are:

- Make the tech stack simpler and therefore more compatible & easier to integrate into different React and Preact projects without the need to install additional dependencies. This is achieved by removing the usage of `styled-components` and `twin-macro`, and instead using "vanilla" TailwindCSS on React. This way, projects using TPDS will be able to use TailwindCSS via traditional classNames instead of the `tw` prop (from `twin-macro`). This will also play better with TypeScript.
- Using Next.js (instead of Gatsby.js) as a framework for the docs will make the documentation site more future-proof.

## Delivery

The end goal of this project is to replace the code currently packaged in the [TPDS NPM module](https://www.npmjs.com/package/@tempoplatform/tpds) in order to update existing projects without havign to change the name of the module - only install a new version.

The code of the [existing documentation site](https://tempo-platform-design-system.netlify.app/) will also be replaced and the site should be looking basically the same (if not better).

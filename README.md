![TPDS](https://repository-images.githubusercontent.com/661860948/16741704-6b1e-4b6d-a79c-c037a6e242c7)

## TPDS - The Tempo Platform Design System

This repository holds the source code and documentation of the Tempo Platform Design System.

Stack:

- React
- TailwindCSS

[Visit the documentation site](https://tempods.netlify.app/)

### The flow

1 - The original design of this design system lives in a [Figma document](https://www.figma.com/file/HLmNcoB2XSKbv5dKJd2JpK/Tempo-Platform-Design-System).

2 - A local node.js script (`./scripts/getFigmaTokens`) extracts styles from the Figma document (colors, fonts, spacings, breakpoints, shadows) and saves them in JavaScript format in the `./tpds/tokens/index.js` file.

3 - The `./tpds/tokens/index.js` file is imported by the TailwindCSS configuration file at `./src/tpds/system/tailwind.config.js` to personalize Tailwind according to the styles in Figma.

Finally, this project exports a [NPM module](https://www.npmjs.com/package/@tempoplatform/tpds) that is in turn consumed by other projects.

### Instructions to run this project

The documentation site is a Next.js app. If you wish to run it in your machine, clone and run this project:

```bash
// Clone the project
git clone git@github.com:Tempo-Platform/tpds.git tpds

// cd into the folder
cd tpds

// Install the dependencies
yarn

// Start up
yarn dev
```

The project will run on http://localhost:3000/

### Instructions to perform updates to the NPM module

See README in the `npm_module` folder.

### Relevant links to this project

Documentation page [Tempo Platform Design System](https://tempods.netlify.app/)

TPDS [NPM module](https://www.npmjs.com/package/@tempoplatform/tpds)

### Useful references

[TailwindCSS Documentation](https://tailwindcss.com/docs)

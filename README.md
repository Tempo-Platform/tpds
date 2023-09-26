## TPDS - The Tempo Platform Design System

This repository holds the source code and documentation of the Tempo Platform Design System.

Stack:

- React
- TailwindCSS

[Visit the documentation site](https://github.com/Tempo-Platform/tpds)

### The flow

1 - The original design of this design system lives in a [Figma document](https://www.figma.com/file/HLmNcoB2XSKbv5dKJd2JpK/Tempo-Platform-Design-System).

2 - A local node.js script (`./scripts/getFigmaTokens`) extracts styles from the Figma document (colors, fonts, spacings, breakpoints, shadows) and saves them in JSON format in the `./tpds/tokens.js` file

3 - The `./tpds/tokens.js` file is imported by the TailwindCSS configuration file at `./src/tpds/system/tailwind.config.js` to personalize Tailwind according to the styles in Figma.

Finally, this project exports a [NPM module](https://www.npmjs.com/package/@tempoplatform/tpds) that is in turn consumed by other projects.

### Instructions to run this project

The documentation site is a NExt.js app. If you wish to run it in your machine, clone and run this project:

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

Create an `.env` file in the project root, then add the Figma file ID and your Figma API access token, like the example below. You need to get your own Figma API access token.

```shell
FIGMA_API_TOKEN=your-access-token
FIGMA_FILE_ID=HLmNcoB2XSKbv5dKJd2JpK
```

The FIGMA_FILE_ID in the code above is the ID of the Figma file used in the TPDS design system. If you are using this project to create your own, just replace that file ID with the ID of the Figma file you're using. However, your Figma file should follow the same structure, so copying our Figma file into your Figma account will be the most straightforward way to get started.

Also, if you intend to create your own NPM module, you also have to change the module name, author etc in the file `./npm_module/package.json` in order to publish your own NPM module.)

4/5: To publish new versions of the NPM module, you need to be logged into NPM in the CLI, as a user with authorization to make updates to the @tempoplatform space (or your own space if you're building your own NPM module):

```shell
npm login
```

5/5: If all the above is done, you are ready to make updates. There are three types of updates available:

```shell
// patch update (-.-.+)
npm run publish_patch

// minor update (-.+.-)
npm run publish_minor

// major update (+.-.-)
npm run publish_major
```

Alternatively, use the following script variant to automatically git-commits the changes with a commit message that includes the new version number: "Update NPM module to X.X.X". Remember to push the changes to the appropriate branch / PR.

```shell
// patch update (-.-.+)
npm run publish_patch_and_commit

// minor update (-.+.-)
npm run publish_minor_and_commit

// major update (+.-.-)
npm run publish_major_and_commit
```

### To simply update the design tokens

If you just want to test the latest design tokens, setup an `.env` file like explained above, pull the tokens and test the app:

```shell
// pull the tokens
yarn pull-tokens

// test the app
yarn dev
```

### Relevant links to this project

Documentation page [Tempo Platform Design System](https://tempods.netlify.app/)

TPDS [NPM module](https://www.npmjs.com/package/@tempoplatform/tpds)

### Useful references

[TailwindCSS Documentation](https://tailwindcss.com/docs)

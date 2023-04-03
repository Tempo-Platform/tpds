## TPDS - The Tempo Platform Design System

This repository holds the source code and documentation of the [Tempo Platform Design System](https://hbui.netlify.app/)

[Visit the documentation site](https://hbui.netlify.app/)

### The flow

The original design of this design system lives in a [Figma document](https://www.figma.com/file/HLmNcoB2XSKbv5dKJd2JpK/Tempo-Platform-Design-System). This package contains a custom script that extracts the design tokens from the Figma document (colors, fonts, spacings, breakpoints, shadows) and saves them in a `./hbui/tokens.js` file, which is then used to create a custom [TailwindCSS](https://tailwindcss.com/) configuration. This project also uses [twin.macro](https://github.com/ben-rogerson/twin.macro) to make use of TailwindCSS in a React-friendly manner. Finally, this project exports an [NPM module](https://www.npmjs.com/package/@tempoplatform/tpds) that is in turn consumed by other projects.

### Instructions to run this project

If you wish to run the TPDS documentation locally, simply clone and run this project:

```bash
// Clone the project
git clone git@github.com:Tempo-Platform/tpds.git tpds

// cd into the folder
cd tpds

// Install the dependencies
yarn

// Start up
yarn develop
```

The project will run on http://localhost:8000/

Alternatively, run this command to enable opening the site in the local network (eg. in your phone)

```bash
yarn develop-m
```

### Instructions to perform updates to the NPM module

To perform updates to the NPM module, a local script connects to the Figma API (v1) and downloads the updated design tokens into the file `./hbui/tokens.js`. To set up, it is necessary to create an `.env` file with the Figma file ID and a Figma API access token.

These are the steps:

1/5: First, make sure the app is running without errors.

2/5: Get a Figma API access token

3/5: Create a file called `.env` at the root of the project with the following content (replace Figma API access token with your own):

```shell
FIGMA_API_TOKEN=your-access-token
FIGMA_FILE_ID=HLmNcoB2XSKbv5dKJd2JpK
```

The FIGMA_FILE_ID in the code above is our original Figma file for the TPDS design system. 

(If you are trying this outside Tempo and you want to create your own NPM module, you should make a copy of our Figma file to get started, grab the file ID from your copy and replace the FIGMA_FILE_ID in the code above. You will also have to change the module name, author etc in the file `./npm_module/package.json` in order to publish your own NPM module.)

4/5: You need to be logged into NPM as a user with authorization to make updates to the @tempoplatform space (or your own space if you're building your own NPM module).

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
yarn develop
```

### Relevant links to this project

Documentation page [Tempo Platform Design System](https://tpds.netlify.app/)

TPDS [NPM module](https://www.npmjs.com/package/@tempoplatform/tpds)

### Useful references

[TailwindCSS Documentation](https://tailwindcss.com/docs)

TailwindCSS for React: [twin.macro](https://github.com/ben-rogerson/twin.macro)

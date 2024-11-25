## Tempo Platform Design System

This module contains the UI components, elements and design tokens of the Tempo Platform Design System.

#### Example usage:

Import and use a button element:

```shell
import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button>
  My button
</Button>
```

#### How to publish a new version of the NPM module:

1. First, make sure you have an `.env` file with values for the properties:

```shell
FIGMA_API_TOKEN=<figma_api_token>
FIGMA_FILE_ID=<figma_file_id>
```

2. Then, run the build script:

```shell
cd npm_module
yarn build (or npm run build)
```

3. Finally, if you logged in to NPM, you can publish the module to NPM:

First, manually bump the version in the `package.json` file.
Then, run the following command:

```shell
npm publish
```

Learn more at the documentation website: https://tempods.netlify.app/

TPDS main repository: https://github.com/Tempo-Platform/tpds

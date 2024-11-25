import util from 'util'
import fs from 'fs'
import { deleteAsync } from 'del'
import { exec } from 'child_process'
import { getDesignTokens } from './scripts/getFigmaTokens.js'
import { fileURLToPath } from 'url'
import path from 'path'
const execAsync = util.promisify(exec)

let module_version = process.env.npm_package_version
let tokens = null

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pathToDistFolder = path.join(__dirname, './dist')
const pathToSrcFolder = path.join(__dirname, './src')

const TPDSlogo = `
████████ ██████  ██████  ███████ 
   ██    ██   ██ ██   ██ ██      
   ██    ██████  ██   ██ ███████ 
   ██    ██      ██   ██      ██ 
   ██    ██      ██████  ███████ 
  `

async function logTPDS() {
  console.log('- - - - - - - - - - - - - - - - ')
  console.log('- - - - - - - - - - - - - - - - ')
  console.log(TPDSlogo)
  console.log('- - - - - - - - - - - - - - - - ')
  console.log('The Tempo Platform Design System')
  console.log('- - - - - - - - - - - - - - - - ')
  console.log('- - - - - - - - - - - - - - - - ')
  console.log('TPDS ::: Local module version before build:', module_version)
  console.log('')
}

async function install_dependencies() {
  console.log('TPDS ::: Installing fresh dependencies...')
  const { stdout, stderr } = await execAsync('yarn')
  if (stderr) {
    console.log('TPDS ::: Error installing dependencies:')
    throw new Error(stderr)
  }
  console.log(stdout)
}

async function delete_dist_folder() {
  console.log('TPDS ::: Deleting dist folder...')
  if (fs.existsSync(pathToDistFolder)) {
    await deleteAsync([pathToDistFolder])
  }
}

async function create_dist_folder() {
  console.log('TPDS ::: Creating new dist folder...')
  if (!fs.existsSync(pathToDistFolder)) {
    fs.mkdirSync(pathToDistFolder)
  }
}

async function fetch_tokens() {
  console.log('TPDS ::: Fetching tokens from Figma...')
  tokens = await getDesignTokens()
}

async function generate_colors_CSS_vars() {
  console.log('TPDS ::: Generating colors CSS vars file...')
  const command = `npm run generate_color_vars`
  const { stdout } = await execAsync(command)
  console.log(stdout)
}

async function build_base_CSS() {
  console.log('TPDS ::: Building base CSS...')
  const command = `postcss ./tailwind.css -o ${pathToSrcFolder}/css/tpds.css`
  const { stdout, stderr } = await execAsync(command)
  if (stderr) {
    console.log('TPDS ::: Error building base CSS:')
    throw new Error(stderr)
  }
  console.log(stdout)
}

async function copy_fonts_files() {
  console.log('TPDS ::: Copying fonts files...')
  const command = `copyfiles -u 2 ./src/assets/fonts/**/*.* ./dist/assets`
  const { stdout, stderr } = await execAsync(command)
  if (stderr) {
    console.log('TPDS ::: Error copying fonts files:')
    throw new Error(stderr)
  }
  console.log(stdout)
}

async function run_compilations() {
  console.log('TPDS ::: Running compilations...')
  const command = `rollup --jsx -c rollup.config.js`
  const { stdout } = await execAsync(command)
  console.log(stdout)
}

async function run() {
  await logTPDS()
  await install_dependencies()
  await delete_dist_folder()
  await create_dist_folder()
  await fetch_tokens()
  await generate_colors_CSS_vars()
  await build_base_CSS()
  await copy_fonts_files()
  await run_compilations()
  console.log('TPDS build script finished.')
}

export default run()

import util from 'util'
import { deleteAsync } from 'del'
import { exec } from 'child_process'
import { getDesignTokens } from './scripts/getFigmaTokens.js'
const execAsync = util.promisify(exec)

async function delete_module_folder() {
  await deleteAsync(['npm_module/_dist'])
}
async function fetch_tokens() {
  await getDesignTokens()
}
async function packindex() {
  const { stdout, stderr } = await execAsync('npm run packindex')
  console.log('packindex stdout:', stdout)
  console.log('packindex stderr:', stderr)
}
async function pack_categories() {
  const { stdout, stderr } = await execAsync('npm run pack_categories')
  console.log('pack_categories stdout:', stdout)
  console.log('pack_categories stderr:', stderr)
}
async function publish_module() {
  const { stdout, stderr } = await execAsync('npm run publish_module')
  console.log('publish_module stdout:', stdout)
  console.log('publish_module stderr:', stderr)
}

async function run() {
  await delete_module_folder()
  await fetch_tokens()
  await packindex()
  await pack_categories()
  await publish_module()
}

export default run()

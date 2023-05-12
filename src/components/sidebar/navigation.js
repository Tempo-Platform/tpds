import navigationComponents from './navigation_components'
import guidelinesComponents from './navigation_guidelines'
import navigationElements from './navigation_elements'
import navigationDesignTokens from './navigation_designtokens.js'
import navigationMobile from './navigation_mobile.js'

const home = {
  link: '/',
  title: 'Home',
}
const gettingStarted = {
  link: '/getting-started',
  title: 'Getting Started',
}
const guidelines = {
  link: '/guidelines',
  title: 'Design guidelines',
  subItems: guidelinesComponents,
}
const designTokens = {
  link: '/design-tokens',
  title: 'Design Tokens',
  subItems: navigationDesignTokens,
}
const code = {
  link: '/code',
  title: 'Code',
}
const elements = {
  link: '/elements',
  title: 'Elements',
  subItems: navigationElements,
}
const components = {
  link: '/components',
  title: 'Components',
  subItems: navigationComponents,
}
const mobile = {
  link: '/mobile',
  title: 'Mobile',
  subItems: navigationMobile,
}
// const downloads = {
//   link: '/downloads',
//   title: 'Downloads',
// }
const faq = {
  link: '/faq',
  title: 'FAQ',
}

const links =  [
  home,
  gettingStarted,
  faq,
  // downloads,
  code,
  guidelines,
  designTokens,
  elements,
  components,
  mobile,
]

export default links
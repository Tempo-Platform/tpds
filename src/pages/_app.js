import '../lib/globals.css'
import '../tpds/system/basestyles.css'
import '../tpds/system/colors.css'
import Layout from '../lib/layout'
import Fonts from '@/tpds/system/Fonts'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

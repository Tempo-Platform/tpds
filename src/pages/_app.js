import '../lib/globals.css'
import Layout from '../lib/layout'
import Colors from '@/tpds/system/Colors'
import Fonts from '@/tpds/system/Fonts'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Colors />
      <Component {...pageProps} />
    </Layout>
  )
}

import '../styles/global.css'
import Router from 'next/router'

import NProgress from 'nprogress'

Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
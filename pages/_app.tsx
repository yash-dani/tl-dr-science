import '../styles/global.css'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

type Props = {
  Component: React.ComponentClass
}

export default function App({ Component }: Props) {
  return <Component />
}
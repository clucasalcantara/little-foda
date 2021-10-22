import type { AppProps } from 'next/app'
// import { GameContextProvider } from '../context'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp

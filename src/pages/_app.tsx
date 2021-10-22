import type { AppProps } from 'next/app'

import { ContextWrapper } from '../store';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextWrapper>
      <Component {...pageProps} />
    </ContextWrapper>
  )
}

export default MyApp

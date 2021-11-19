import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { ContextWrapper } from '../store';
import {GlobalStyle} from '../styles/global';
import { theme } from '../styles/theme';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ContextWrapper>
        <Component {...pageProps} />
        <GlobalStyle />
      </ContextWrapper>
    </ThemeProvider>
  )
}

export default MyApp

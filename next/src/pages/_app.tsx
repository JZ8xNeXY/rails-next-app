import { CacheProvider, EmotionCache } from '@emotion/react'
import { Box } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { AppProps } from 'next/app'
import * as React from 'react'
import '@/styles/destyle.css'
import CurrentUserFetch from '@/components/CurrentUserFetch'
import Header from '@/components/Header'
import SuccessSnackbar from '@/components/Snackbar'
import { styles } from '@/styles'

import createEmotionCache from '@/styles/createEmotionCache'
import theme from '@/styles/theme'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps): JSX.Element {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <CurrentUserFetch />
        <Box css={styles.wrapper}>
          <Header />
          <Box css={styles.component}>
            <Component {...pageProps} />
          </Box>
        </Box>
        <Component {...pageProps} />
        <SuccessSnackbar />
      </ThemeProvider>
    </CacheProvider>
  )
}

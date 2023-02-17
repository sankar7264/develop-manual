import { useEffect } from 'react'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Head from 'next/head'
import Layout from 'src/components/layout/Layout'
import createEmotionCache from 'src/styles/createEmotionCache'
import 'src/styles/globals.css'
import theme from 'src/styles/theme'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  useEffect(() => {
    // Removing server-side injected CSS
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      console.log('Removing server side injected styles', jssStyles)
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  if (process.env.NODE_ENV !== 'development') {
    console.log = () => {}
    console.debug = () => {}
    console.info = () => {}
    console.warn = () => {}
  }

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Title</title>
        <meta name="description" content="" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp

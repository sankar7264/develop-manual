import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import createEmotionServer from '@emotion/server/create-instance'
import createEmotionCache from 'src/styles/createEmotionCache'
import theme from 'src/styles/theme'
import i18nextConfig from 'i18n.config'

export default class MyDocument extends Document {
  render() {
    const currentLocale =
      // eslint-disable-next-line no-underscore-dangle
      this.props.__NEXT_DATA__.locale
        ? i18nextConfig.i18n.defaultLocale
        : 'en-US'

    return (
      <Html lang={currentLocale}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta name="emotion-insertion-point" content="" />
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage

  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />
        },
    })

  const initialProps = await Document.getInitialProps(ctx)

  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  }
}

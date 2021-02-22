import { Children } from "react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheets } from "@material-ui/core"
import CleanCSS from "clean-css"
import { themeConstants } from "libraries/theme"

const cleanCSS = new CleanCSS()

export default class Document extends NextDocument {
  static async getInitialProps(context) {
    const originalRenderPage = context.renderPage
    const sheets = new ServerStyleSheets()

    context.renderPage = () => originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    })

    const initialProps = await NextDocument.getInitialProps(context)

    const css = cleanCSS.minify(sheets.toString()).styles

    return {
      ...initialProps,
      head: [<style key="jss-server-side" id="jss-server-side" dangerouslySetInnerHTML={{ __html: css }} />, ...Children.toArray(initialProps.head)]
    }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <link rel="manifest" href="/manifest.json" />
          <link href="https://storage.googleapis.com" rel="preconnect" />
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="preload" as="style" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
          <style dangerouslySetInnerHTML={{ __html: themeConstants }} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
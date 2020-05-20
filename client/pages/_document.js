import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheets } from "@material-ui/core"

export default class Document extends NextDocument {
  static async getInitialProps(context) {
    const renderPage = context.renderPage
    const styleSheets = new ServerStyleSheets()

    context.renderPage = () => renderPage({
      enhanceApp: App => props => styleSheets.collect(<App {...props} />)
    })

    const initialProps = await NextDocument.getInitialProps(context)

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            id="jss-server-side"
            dangerouslySetInnerHTML={{ __html: styleSheets.toString().replace(/\n/g, "").replace(/ {2,}/g, "") }} />
        </>
      )
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
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
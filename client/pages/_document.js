import NextDocument, {
  Head, Html, Main, NextScript,
} from 'next/document';

export default class Document extends NextDocument {
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

        <body className="mdc-typography">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

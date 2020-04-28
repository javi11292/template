import Head from "next/head"
import Error from "next/error"
import Main from "components/Main"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Client</title>
      </Head>

      <Main>
        {pageProps.statusCode
          ? <Error statusCode={pageProps.statusCode} />
          : <Component {...pageProps} />
        }
      </Main>
    </>
  )
}
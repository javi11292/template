import Head from "next/head"
import Main from "components/Main"
import Error from 'next/error'

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
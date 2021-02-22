import Head from "next/head"
import Main from "components/main"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Client</title>
      </Head>

      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  )
}
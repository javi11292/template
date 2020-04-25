import Head from "next/head"
import Main from "components/Main"

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
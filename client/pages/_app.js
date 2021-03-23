import Main from 'components/main';
import Head from 'next/head';
import './styles.scss';

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
  );
}

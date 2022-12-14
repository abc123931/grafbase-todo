import "../src/style/index.css";

import type { CustomAppPage } from "next/app";
import Head from "next/head";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <Head>
        <title>nexst</title>
      </Head>
      <SessionProvider
        session={pageProps.session as Session}
        refetchInterval={5 * 60}
      >
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </>
  );
};

export default App;

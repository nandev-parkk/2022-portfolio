import { Global } from "@emotion/react";
import global from "styles/global";
import Layout from "components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Global styles={global} />
      <Component {...pageProps} />
    </Layout>
  );
}

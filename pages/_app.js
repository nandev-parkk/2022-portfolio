import global from "styles/global";
import Layout from "components/Layout";
import { Global } from "@emotion/react";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Global styles={global} />
      <Component {...pageProps} />
    </Layout>
  );
}

import global from "styles/global";
import Layout from "components/Layout";
import { Global } from "@emotion/react";
import { useRef, useState } from "react";
import { IsOpenContext, IsObserverContext } from "contexts/store";

export default function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef([]);

  return (
    <IsObserverContext.Provider value={{ observerRef }}>
      <IsOpenContext.Provider value={{ isOpen, setIsOpen }}>
        <Layout>
          <Global styles={global} />
          <Component {...pageProps} />
        </Layout>
      </IsOpenContext.Provider>
    </IsObserverContext.Provider>
  );
}

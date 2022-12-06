import global from "styles/global";
import Layout from "components/Layout";
import profileImg from "public/images/profile.jpeg";
import { Global } from "@emotion/react";
import { store } from "modules/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { DefaultSeo } from "next-seo";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <Global styles={global} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
}

const persistor = persistStore(store);
const DEFAULT_SEO = {
  title: "Park SangHun | Portfolio",
  description: "프론트엔드 개발자 박상훈의 포트폴리오",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: process.env.NEXT_PUBLIC_DOMAIN,
    title: "Park SangHun | Portfolio",
    site_name: "Park SangHun | Portfolio",
    images: [
      {
        url: profileImg.src,
        width: 1400,
        height: 1400,
        alert: "프론트엔드 개발자 박상훈의 포트폴리오",
      },
    ],
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

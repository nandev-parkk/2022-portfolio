import Layout from "components/Layout";
import global from "styles/global";
import profileImg from "public/images/profile.jpeg";
import favicon from "public/favicon.ico";
import {
  IsOpenContext,
  ObserverContext,
  CsrfTokenContext,
  HttpContext,
} from "contexts/store";
import Http from "modules/http";
import { useEffect, useState, useRef } from "react";
import { DefaultSeo } from "next-seo";
import { Global } from "@emotion/react";

export default function MyApp({ Component, pageProps }) {
  const [csrfToken, setCsrfToken] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef([]);
  const http = new Http(csrfToken);

  useEffect(() => {
    http
      .getCsrfToken()
      .then((res) => {
        setCsrfToken(res.csrfToken);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ObserverContext.Provider value={{ observerRef }}>
        <IsOpenContext.Provider value={{ isOpen, setIsOpen }}>
          <CsrfTokenContext.Provider value={csrfToken}>
            <HttpContext.Provider value={http}>
              <Layout>
                <Global styles={global} />
                <Component {...pageProps} />
              </Layout>
            </HttpContext.Provider>
          </CsrfTokenContext.Provider>
        </IsOpenContext.Provider>
      </ObserverContext.Provider>
    </>
  );
}

const DEFAULT_SEO = {
  title: "Park SangHun | Portfolio",
  description: "프론트엔드 개발자 박상훈의 포트폴리오",
  additionalMetaTags: [
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1",
    },
    { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
    {
      name: "google-site-verification",
      content: "bZgMGbq8hY5Eg_UU3cNc3o_GUjFnUcTbJndCo3ZYzTE",
    },
    {
      rel: "icon",
      href: favicon.src,
    },
  ],
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

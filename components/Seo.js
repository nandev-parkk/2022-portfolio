import Head from "next/head";

export default function Seo({ title }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="프론트엔드 개발자 박상훈의 포트폴리오"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1"
      />
      <title>{title}</title>
      <meta property="og:url" content="https://*.html" />
      <meta property="og:title" content="..." />
      <meta property="og:description" content="..." />
      <meta property="og:image" content="https://*.jpg" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="..." />
      <meta name="twitter:description" content="..." />
      <meta name="twitter:image" content="https://*.jpg" />
    </Head>
  );
}

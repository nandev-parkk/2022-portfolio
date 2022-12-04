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
      <meta property="og:url" content={domain} />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="프론트엔드 개발자 박상훈의 포트폴리오"
      />
      <meta property="og:image" content="" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content="프론트엔드 개발자 박상훈의 포트폴리오"
      />
      <meta name="twitter:image" content="" />
    </Head>
  );
}

const domain = process.env.NEXT_PUBLIC_DOMAIN;

import { NextSeo } from "next-seo";

export default function Seo({ title, desc, image }) {
  return (
    <NextSeo
      title={title}
      description={desc}
      additionalMetaTags={[
        {
          httpEquiv: "X-UA-Compatible",
          content: "IE=edge",
        },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1",
        },
      ]}
      openGraph={{
        type: "website",
        locale: "ko_KR",
        url: domain,
        title: title,
        description: desc,
        images: [
          {
            url: image.src,
            alert: "프론트엔드 개발자 박상훈의 포트폴리오",
          },
        ],
      }}
    />
  );
}

const domain = process.env.NEXT_PUBLIC_DOMAIN;

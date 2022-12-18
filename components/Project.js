import SectionTitle from "./SectionTitle";
import { ObserverContext } from "contexts/store";
import commonStyles from "styles/common";
import { useContext } from "react";
import { css } from "@emotion/react";
import Link from "next/link";

export default function Project() {
  const { observerRef } = useContext(ObserverContext);

  return (
    <section
      id="project"
      ref={(el) => (observerRef.current[3] = el)}
      css={project}
    >
      <SectionTitle title="Project" />
      <div css={content}>
        <div css={item}>
          <h3 css={itemTitle}>영화 검색 서비스</h3>
          <p css={itemDesc}>
            영화 검색 서비스의 프론트엔드 파트를 맡아 개발 중에 있습니다.
            Next.js를 사용해 개발 중이며, 네이버 Open API를 이용해 검색 결과를
            보여줍니다.
          </p>
          <div css={skillGroup}>
            <h4 css={skillTitle}>사용 기술</h4>
            <p css={skillDesc}>
              Next.js, React, Redux-toolkit, Emotion, Axios, Vercel
            </p>
          </div>
        </div>
        <div css={item}>
          <h3 css={itemTitle}>포트폴리오</h3>
          <p css={itemDesc}>
            포트폴리오 클라이언트/어드민 사이트를 제작했습니다. 클라이언트는
            Next.js를 사용했으며 어드민은 React(CRA)를 사용했습니다. 백엔드는
            Node.js와 Express를 사용했으며, DB는 Mysql을 사용했습니다.
            프론트엔드는 Vercel을, 백엔드는 AWS EC2를 이용해 배포했습니다.
          </p>
          <div css={skillGroup}>
            <h4 css={skillTitle}>사용 기술</h4>
            <p css={skillDesc}>
              Next.js, React, Emotion, Axios, Node.js, Express, Mysql, Vercel,
              AWS EC2
            </p>
          </div>
          <Link
            href="https://github.com/nandev-parkk/2022-portfolio"
            rel="noopenner noreferrer"
            target="_blank"
            css={link}
          >
            Github 바로가기
          </Link>
        </div>
      </div>
    </section>
  );
}

const { color, font, transition } = commonStyles;

const project = css`
  margin: 140px 0;

  @media screen and (max-width: 767px) {
    margin: 80px 0;
  }
`;

const content = css``;

const item = css`
  &:not(:last-child) {
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom: 1px solid ${color.white};
  }

  @media screen and (max-width: 425px) {
    font-size: ${font.size.sm};
  }
`;

const itemTitle = css`
  font-size: ${font.size.xl};
  font-weight: ${font.weight.bold};
  margin-bottom: 20px;

  @media screen and (max-width: 425px) {
    font-size: ${font.size.lg};
  }
`;

const itemDesc = css`
  margin-bottom: 14px;
`;

const link = css`
  border: 1px solid ${color.white};
  padding: 8px 14px;
  border-radius: 4px;
  font-size: ${font.size.sm};

  &:not(:last-child) {
    margin-right: 14px;
  }

  &:hover {
    background-color: ${color.white};
    transition: ${transition.short};
    color: ${color.black};
  }
`;

const skillGroup = css`
  margin-bottom: 14px;
`;

const skillTitle = css`
  margin-bottom: 6px;
`;

const skillDesc = css``;

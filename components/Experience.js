import SectionTitle from "./SectionTitle";
import { ObserverContext } from "contexts/store";
import { useContext } from "react";
import { css } from "@emotion/react";
import commonStyles from "styles/common";
import Link from "next/link";
import Image from "next/image";
import img01 from "/public/images/experience/experience_1.png";

export default function Experience() {
  const { observerRef } = useContext(ObserverContext);

  return (
    <section
      id="experience"
      ref={(el) => (observerRef.current[2] = el)}
      css={experience}
    >
      <SectionTitle title="Experience" align="right" />
      <div css={content}>
        <div css={item}>
          <h3 css={itemTitle}>P2P 웹사이트 개발</h3>
          <p css={itemDesc}>
            P2P 서비스의 클라이언트와 어드민 사이트의 프론트엔드 파트를
            개발했습니다. React(CRA)를 사용했으며, SCSS module을 사용해 스타일링
            했습니다. 상태 관리를 위해 Redux toolkit을 사용했으며, Axios를
            이용해 데이터를 Fetching했습니다.
          </p>
          <div css={skillGroup}>
            <h4 css={skillTitle}>사용 기술</h4>
            <p css={skillDesc}>
              React, React Router, Scss, Redux toolkit, Axios
            </p>
          </div>
          <Link
            href="https://stepsp2p.com"
            rel="noopenner noreferrer"
            target="_blank"
            css={link}
          >
            바로가기
          </Link>
        </div>
        <div css={item}>
          <h3 css={itemTitle}>제휴 업체 웹사이트 개발</h3>
          <p css={itemDesc}>
            제휴 업체들의 웹사이트를 개발했으며, 개발 후 유지보수 업무를
            담당했습니다.
          </p>
          <div css={skillGroup}>
            <h4 css={skillTitle}>사용 기술</h4>
            <p css={skillDesc}>HTML, CSS, Javascript, 그누보드5</p>
          </div>
          <Link
            href="http://meta-san.com/"
            rel="noopenner noreferrer"
            target="_blank"
            css={link}
          >
            메타샌 바로가기
          </Link>
          <Link
            href="http://tiuminp.com/"
            rel="noopenner noreferrer"
            target="_blank"
            css={link}
          >
            티움 바로가기
          </Link>
        </div>
        <div css={item}>
          <h3 css={itemTitle}>에이아이댑스 공식 웹사이트 개발</h3>
          <p css={itemDesc}>
            에이아이댑스 공식 웹사이트를 개발했습니다. 웹접근성을 고려하여
            개발했으며, 반응형 웹으로 개발했습니다. 게시판 사용을 위해
            그누보드5를 사용했으며, 애니메이션을 위해 AOS 라이브러리를
            사용했습니다.
          </p>
          <div css={skillGroup}>
            <h4 css={skillTitle}>사용 기술</h4>
            <p css={skillDesc}>HTML, CSS, Javascript, 그누보드5</p>
          </div>
          <Link
            href="http://www.ai-dapps.com/"
            rel="noopenner noreferrer"
            target="_blank"
            css={link}
          >
            바로가기
          </Link>
        </div>
      </div>
    </section>
  );
}

const { color, font } = commonStyles;

const experience = css`
  margin: 140px 0;
`;

const content = css``;

const item = css`
  &:nth-of-type(2n) {
    text-align: right;
  }

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
`;

const skillGroup = css`
  margin-bottom: 14px;
`;

const skillTitle = css`
  margin-bottom: 6px;
`;

const skillDesc = css``;

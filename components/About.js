import SectionTitle from "./SectionTitle";
import commonStyles from "styles/common";
import profile from "public/images/profile.jpeg";
import { ObserverContext } from "contexts/store";
import { useContext } from "react";
import Image from "next/image";
import { css } from "@emotion/react";

export default function About() {
  const { observerRef } = useContext(ObserverContext);

  return (
    <section id="about" ref={(el) => (observerRef.current[1] = el)} css={about}>
      <SectionTitle title="About" />
      <div css={content}>
        <span css={img}>
          <Image layout="responsive" src={profile} alt="profile" />
        </span>
        <div css={descGroup}>
          <p css={desc}>
            2년차 프론트엔드 개발자로 React를 이용한 웹 서비스의 설계와 개발,
            배포 및 운영을 한 경험이 있으며, 개발 프로세스에 대한 이해를 가지고
            있습니다. 항상 비즈니스가 가진 목표와 가치의 실현을 위해
            노력해왔으며, 다양한 포지션에 대한 이해 속에서 유연하게
            커뮤니케이션하며 협업해왔습니다.
            <br />
            <br />
            유저들을 위한 좋은 사용자 경험은 언제나 비즈니스의 성장과 성공으로
            이어진다고 생각하기에, 늘 좋은 사용자 경험을 제공하기 위해 사용자의
            입장에서 생각하며 개발해왔습니다.
            <br />
            <br />
            좋은 코드란 사람이 이해하기 쉬운 코드라고 생각하며, 항상 재사용성과
            확장성을 염두에 둔 간결한 코드를 작성하고자 노력합니다.
          </p>
          <div css={skills}>
            <span css={skillsTitle} className="montserrat">
              Skills
            </span>
            <ul css={skillsList}>
              <li>
                <p>HTML</p>
                <p>CSS & SCSS</p>
                <p>Emotion</p>
              </li>
              <li>
                <p>Javascript</p>
                <p>React.js</p>
                <p>Next.js</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const { color, font } = commonStyles;

const about = css`
  margin: 0 0 140px;
`;

const content = css`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const img = css`
  min-width: 50%;
  min-height: 50%;
  max-width: 400px;
  display: block;
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
  }

  @media screen and (max-width: 767px) {
    margin: 0 auto 40px;
  }

  @media screen and (min-width: 768px) {
    margin-right: 40px;
  }
`;

const descGroup = css``;

const desc = css`
  margin-bottom: 40px;

  @media screen and (max-width: 425px) {
    font-size: ${font.size.sm};
  }
`;

const skills = css``;

const skillsTitle = css`
  font-size: ${font.size.xl};
  display: inline-block;
  margin-bottom: 20px;

  @media screen and (max-width: 425px) {
    font-size: ${font.size.lg};
  }
`;

const skillsList = css`
  display: flex;

  li {
    &:not(:last-child) {
      margin-right: 40px;
    }

    p {
      position: relative;
      padding-left: 10px;

      &:not(:last-child) {
        margin-bottom: 10px;
      }

      &::before {
        content: "";
        width: 4px;
        height: 4px;
        background-color: ${color.white};
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        border-radius: 50%;
      }
    }
  }

  @media screen and (max-width: 425px) {
    li {
      font-size: ${font.size.sm};
    }
  }
`;

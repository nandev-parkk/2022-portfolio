import { css } from "@emotion/react";
import HiddenTitle from "./HiddenTitle";
import SectionTitle from "./SectionTitle";
import commonStyles from "styles/common";
import profile from "public/images/1.jpeg";
import Image from "next/image";

export default function About() {
  return (
    <section css={about}>
      <HiddenTitle title="about" />
      <SectionTitle title="About" />

      <div css={content}>
        <span css={img}>
          <Image layout="responsive" src={profile} alt="profile" />
        </span>
        <div css={descGroup}>
          <p css={desc}>
            2년차 프론트엔드 개발자로 사용자 경험을 중요하게 생각하며,
            비지니스의 가장 중요한 가치는 유저들의 좋은 사용자 경험이라고
            믿습니다. 가치는 함께할 때 생겨나기에, 다양한 포지션에 대한 이해
            속에서 유연하게 커뮤니케이션하며 협업해왔습니다.
            <br />
            <br />
            React와 NodeJS, AWS를 이용해 프로젝트 설계와 개발, 배포 및 운영을 한
            경험이 있으며, 개발 프로세스에 대한 이해를 가지고 있습니다. 좋은
            코드란 사람이 이해하기 쉬운 코드라고 생각하며, 문제 해결을 위해 항상
            재사용성과 확장성을 염두에 둔 간결한 코드를 작성하고자 노력합니다.
            <br />
            <br />
            개발자는 비지니스가 가진 가치를 실현하기 위해 초석을 다지는
            사람이라고 생각하며, 비니지스의 성공에 기여하기 위해 최선을
            다합니다.
          </p>
          <div css={skills}>
            <span css={skillsTitle} className="montserrat">
              Skills
            </span>
            <ul css={skillsList}>
              <li>
                <p>HTML</p>
                <p>CSS(SCSS)</p>
                <p>Javascript</p>
              </li>
              <li>
                <p>React</p>
                <p>Next.js</p>
                <p>Node.js</p>
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
  padding: 0 0 140px;
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
  max-height: 400px;
  display: block;
  margin: 0 auto 40px;

  @media screen and (min-width: 768px) {
    margin-right: 40px;
  }
`;
const descGroup = css``;

const desc = css`
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    font-size: ${font.size.sm};
  }
`;

const skills = css``;

const skillsTitle = css`
  font-size: 24px;
  display: inline-block;
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    font-size: ${font.size.md};
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

  @media screen and (max-width: 767px) {
    li {
      font-size: ${font.size.sm};
    }
  }
`;

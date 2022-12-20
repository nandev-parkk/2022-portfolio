import React from "react";
import { css } from "@emotion/react";
import commonStyles from "styles/common";

export default function TabContent({ isActive }) {
  return (
    <div css={content}>
      <div css={[itemGroup, itemGroup01({ isActive })]}>
        <div css={item}>
          <div css={titleGroup}>
            <span css={title}>메타 글로브</span>
            <small css={date}>2022.10~2022.12</small>
          </div>
          <ul css={descGroup}>
            <li>
              부동산 투자 플랫폼입니다. 상품 등록 기능을 구현하기 위해 기존
              그누보드5 게시판 코드를 수정했습니다.
            </li>
            <li>서비스 전체 페이지 마크업 및 스타일링</li>
            <li>호텔 상품 등록을 위해 기존 그누보드5 게시판 커스터마이징</li>
            <li>
              <span>사용 기술</span>
              <ul>
                <li>HTML, CSS, Javascript, 그누보드5</li>
              </ul>
            </li>
          </ul>
        </div>
        <div css={item}>
          <div css={titleGroup}>
            <span css={title}>AGC</span>
            <small css={date}>2022.09~2022.10</small>
          </div>
          <ul css={descGroup}>
            <li>
              에이아이댑스 생태계 소개를 위한 웹사이트입니다. 백엔드가 필요하지
              않은 프로젝트로, 프로젝트 환경 구축 및 개발부터 배포까지
              담당했습니다.
            </li>
            <li>서비스 전체 페이지 마크업 및 스타일링</li>
            <li>Netlify를 이용하여 배포 및 도메인 연결</li>
            <li>
              <span>사용 기술</span>
              <ul>
                <li>HTML, CSS, Javascript, React</li>
              </ul>
            </li>
          </ul>
        </div>
        <div css={item}>
          <div css={titleGroup}>
            <span css={title}>P2P 웹사이트 개발</span>
            <small css={date}>2022.06~2022.08</small>
          </div>
          <ul css={descGroup}>
            <li>
              사용자간 거래를 위한 P2P 웹사이트입니다. 프론트엔드 개발환경 구축
              및 개발을 담당했습니다.
            </li>
            <li>프론트엔드파트 개발환경 구축 및 개발</li>
            <li>클라이언트와 어드민 사이트의 프론트엔드 파트 개발</li>
            <li>다양한 디바이스 제공을 위해 반응형 웹으로 제작</li>
            <li>Redux-toolkit과 Redux-persist를 이용한 상태관리</li>
            <li>
              <span>사용 기술</span>
              <ul>
                <li>React, React Router, Scss, Redux-toolkit, Axios</li>
              </ul>
            </li>
          </ul>
        </div>
        <div css={item}>
          <div css={titleGroup}>
            <span css={title}>제휴 업체 웹사이트 개발</span>
            <small css={date}>2022.12~2022.05</small>
          </div>
          <ul css={descGroup}>
            <li>
              에이아이댑스와 제휴 맺은 업체들의 웹사이트를 개발했습니다. 개발 후
              호스팅 업체에 배포하는 업무까지 담당했으며, 유지보수 업무를 담당해
              추가 요청이 있을때마다 유지보수했습니다.
            </li>
            <li>서비스 전체 페이지 마크업 및 스타일링</li>
            <li>게시판 사용이 필요할 때만 그누보드5 사용</li>
            <li>개발 후 배포 및 유지보수 업무 담당</li>
            <li>
              <span>사용 기술</span>
              <ul>
                <li>HTML, CSS, Javascript, 그누보드5</li>
              </ul>
            </li>
          </ul>
        </div>
        <div css={item}>
          <div css={titleGroup}>
            <span css={title}>공식 웹사이트 리뉴얼</span>
            <small css={date}>2021.10~2021.11</small>
          </div>
          <ul css={descGroup}>
            <li>
              에이아이댑스 공식 웹사이트에 다양한 콘텐츠와 애니메이션 및
              게시판을 추가 개발하였습니다.
            </li>
            <li>기획 단계부터 참여하여 프로젝트 진행</li>
            <li>애니메이션을 위해 AOS 라이브러리 사용</li>
            <li>기존 웹사이트에 갤러리 및 게시판 추가를 위해 그누보드5 사용</li>
            <li>그누보드5 게시판 코드 커스터마이징</li>
            <li>
              <span>사용 기술</span>
              <ul>
                <li>HTML, CSS, Javascript, 그누보드5</li>
              </ul>
            </li>
          </ul>
        </div>
        <div css={item}>
          <div css={titleGroup}>
            <span css={title}>메인넷</span>
            <small css={date}>2021.08~2021.09</small>
          </div>
          <ul css={descGroup}>
            <li>
              NFT 파일 업로드를 위한 웹사이트입니다. 서비스 전체 페이지 마크업
              및 스타일링을 담당했습니다.
            </li>
            <li>사이트의 전체 페이지 마크업 및 스타일링</li>
            <li>
              <span>사용 기술</span>
              <ul>
                <li>HTML, CSS, Javascript, React</li>
              </ul>
            </li>
          </ul>
        </div>
        <div css={item}>
          <div css={titleGroup}>
            <span css={title}>공식 웹사이트 개발</span>
            <small css={date}>2021.06~2021.07</small>
          </div>
          <ul css={descGroup}>
            <li>
              에이아이댑스 공식 웹사이트를 제작했습니다. 기획된 문서를 토대로
              디자이너와 소통하며 개발했습니다.
            </li>
            <li>사이트의 전체 페이지 마크업 및 스타일링</li>
            <li>웹접근성을 고려하여 개발</li>
            <li>다양한 디바이스 제공을 위해 반응형 웹으로 제작</li>
            <li>
              <span>사용 기술</span>
              <ul>
                <li>HTML, CSS, Javascript</li>
              </ul>
            </li>
          </ul>
        </div>
        <div css={item}>
          <div css={titleGroup}>
            <span css={title}>DCS</span>
            <small css={date}>2020.11~2021.05</small>
          </div>
          <ul css={descGroup}>
            <li>
              인공지능 개발부터 클라우드 서비스까지 가능한 통합 플랫폼입니다.
              서비스 전체 페이지 마크업 및 스타일링을 담당했습니다.
            </li>

            <li>클라이언트/어드민 사이트의 전체 페이지 마크업 및 스타일링</li>
            <li>다양한 디바이스 제공을 위해 반응형 웹으로 제작</li>
            <li>React 컴포넌트를 효율적으로 사용하고 관리할 수 있도록 작업</li>
            <li>
              <span>사용 기술</span>
              <ul>
                <li>HTML, CSS, Javascript, React</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div css={[itemGroup, itemGroup02({ isActive })]}>
        <div css={item}>
          <div css={titleGroup}>
            <span css={title}>유지보수팀</span>
            <small css={date}>2020.06~2020.10</small>
          </div>
          <ul css={descGroup}>
            <li>
              고객사 요청에 따른 웹사이트 유지보수 업무 담당했습니다. 주로
              웹사이트 UI 수정과 포토샵으로 팝업 이미지 제작 및 업로드 업무를
              수행했습니다.
            </li>
            <li>
              신규 웹사이트 제작시 네이버 및 다음 검색 등록 업무를 수행했습니다.
            </li>
            <li>
              고객의 유지보수 요청이 있을시, 개발자와 일정 산출 및 기술 관련
              소통을 통해 원활히 업무를 수행했습니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const { color, font } = commonStyles;

const content = css``;

const itemGroup = css``;

const itemGroup01 = ({ isActive }) => css`
  display: ${isActive === 0 ? "block" : "none"};
`;

const itemGroup02 = ({ isActive }) => css`
  display: ${isActive === 1 ? "block" : "none"};
`;

const item = css`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 425px) {
    font-size: ${font.size.sm};
  }

  @media screen and (max-width: 767px) {
    display: block;
  }
`;

const titleGroup = css`
  min-width: 220px;

  @media screen and (max-width: 767px) {
    margin: 0 0 14px;
  }
`;

const title = css`
  display: block;
`;

const date = css`
  font-size: ${font.size.xs};
`;

const descGroup = css`
  & > li {
    position: relative;
    padding-left: 14px;

    &:not(:last-child) {
      margin-bottom: 14px;
    }

    &::before {
      content: "";
      width: 4px;
      height: 4px;
      background-color: ${color.white};
      border-radius: 50%;
      position: absolute;
      top: 6px;
      left: 0;
    }

    span {
      margin-bottom: 8px;
      display: block;
    }
  }

  @media screen and (max-width: 425px) {
    & > li {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
`;

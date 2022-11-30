import { css } from "@emotion/react";
import HiddenTitle from "./HiddenTitle";
import commonStyles from "styles/common";
import { useContext } from "react";
import { IsObserverContext } from "contexts/store";

export default function Visual() {
  const { observerRef } = useContext(IsObserverContext);

  return (
    <section id="home" ref={(el) => (observerRef.current[0] = el)} css={visual}>
      <HiddenTitle title="visual" />
      <p className="montserrat">
        Park SangHun
        <span>Front-end Developer</span>
      </p>
    </section>
  );
}

const { color, font } = commonStyles;

const visual = css`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;

  p {
    font-size: 82px;
    text-align: center;
  }

  span {
    font-size: 32px;
    display: block;
    color: ${color.gray};
    margin-top: 24px;
  }

  @media screen and (max-width: 425px) {
    p {
      font-size: 30px;
    }

    span {
      font-size: ${font.size.md};
      margin-top: 10px;
    }
  }

  @media screen and (min-width: 426px) and (max-width: 767px) {
    p {
      font-size: 46px;
    }

    span {
      font-size: ${font.size.xl};
      margin-top: 14px;
    }
  }
`;

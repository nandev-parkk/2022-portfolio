import commonStyles from "styles/common";
import { css } from "@emotion/react";

export default function Footer() {
  return <footer css={footer}>&copy; 2022. nandev All rights reserved.</footer>;
}

const { color, font } = commonStyles;

const footer = css`
  color: ${color.white};
  text-align: center;
  padding: 40px 0;

  @media screen and (max-width: 425px) {
    font-size: ${font.size.sm};
    padding: 20px 0;
  }
`;

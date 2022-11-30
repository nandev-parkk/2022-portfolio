import commonStyles from "styles/common";
import { css } from "@emotion/react";

export default function Footer() {
  return <footer css={footer}>&copy; 2022. nandev All rights reserved.</footer>;
}

const color = { commonStyles };

const footer = css`
  color: ${color.white};
  text-align: center;
  padding: 40px 0;
`;

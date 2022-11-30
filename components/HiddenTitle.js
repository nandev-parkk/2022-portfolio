import { css } from "@emotion/react";

export default function HiddenTitle({ title, tag }) {
  return tag === "h1" ? (
    <h1 css={heading}>{title}</h1>
  ) : (
    <h2 css={heading}>{title}</h2>
  );
}

const heading = css`
  position: absolute;
  top: -9999px;
  left: -9999px;
`;

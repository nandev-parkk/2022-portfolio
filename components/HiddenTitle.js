import { css } from "@emotion/react";

export default function HiddenTitle(props) {
  return props.tag === "h1" ? (
    <h1 css={title}>{props.title}</h1>
  ) : (
    <h2 css={title}>{props.title}</h2>
  );
}

const title = css`
  position: absolute;
  top: -9999px;
  left: -9999px;
`;

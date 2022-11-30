import { css } from "@emotion/react";

export default function Form({ onSubmit, legend, children, css }) {
  return (
    <form onSubmit={onSubmit} css={form}>
      <fieldset>
        <legend>{legend}</legend>
        {children}
      </fieldset>
    </form>
  );
}

const form = css`
  width: min(400px, 100%);

  @media screen and (min-width: 1024px) and (max-width: 1130px) {
    width: min(350px, 100%);
  }
`;

import commonStyles from "styles/common";
import { css } from "@emotion/react";

export default function TextArea({ id, name, value, onChange, required }) {
  return (
    <textarea
      id={id}
      name={name}
      value={value || ""}
      onChange={onChange}
      css={textarea}
      required={required}
    ></textarea>
  );
}

const { color, transition } = commonStyles;

const textarea = css`
  border: 1px solid ${color.white};
  border-radius: 4px;
  display: block;
  width: 100%;
  height: 200px;
  transition: ${transition.short};
  caret-color: ${color.white};
  color: ${color.white};
`;

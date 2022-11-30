import commonStyles from "styles/common";
import { css } from "@emotion/react";

export default function TextField({
  type,
  id,
  name,
  required,
  value,
  autoFocus,
  onChange,
  ref,
}) {
  return (
    <input
      css={input}
      type={type}
      id={id}
      name={name}
      required={required}
      value={value || ""}
      autoFocus={autoFocus}
      onChange={onChange}
      ref={ref}
    />
  );
}

const { color, font, transition } = commonStyles;

const input = css`
  width: 100%;
  display: block;
  border-bottom: 1px solid ${color.white};
  caret-color: ${color.white};
  color: ${color.white};
  transition: ${transition.short};
`;

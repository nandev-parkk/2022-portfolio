import React from "react";

export default function Button({ type, style, children, onClick }) {
  return (
    <button type={type} css={style} onClick={onClick}>
      {children}
    </button>
  );
}

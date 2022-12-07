import { css } from "@emotion/react";
import commonStyles from "./common";

const { color, transition } = commonStyles;

const global = () => css`
  @import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Rajdhani", sans-serif;
    color: ${color.white};
    background: ${color.black};
  }

  body.blur {
    overflow-y: hidden;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  address {
    font-style: normal;
  }

  a {
    text-decoration: none;
    color: inherit;
    outline: none;
    position: relative;
    display: inline-block;
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
    font-family: "Rajdhani", sans-serif;
    cursor: pointer;
    position: relative;
    color: inherit;
  }

  button[disabled] {
    cursor: no-drop;
  }

  fieldset {
    border: none;
  }

  legend {
    position: absolute;
    top: -9999px;
    left: -9999px;
    opacity: 0;
    visibility: hidden;
  }

  input {
    background-color: transparent;
    border: none;
    outline: none;
    font-family: "Rajdhani", sans-serif;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
  }

  textarea {
    resize: none;
    outline: none;
    border: none;
    background-color: transparent;
    font-family: "Rajdhani", sans-serif;
  }

  ::selection {
    background-color: ${color.yellow};
  }

  .link {
    &::after {
      content: "";
      width: 0;
      height: 2px;
      background: ${color.yellow};
      position: absolute;
      bottom: -2px;
      right: 0;
      transition: ${transition.short};
    }

    &:hover::after {
      width: 100%;
      left: 0;
    }
  }

  .montserrat {
    font-family: "Montserrat", sans-serif;
  }
`;

export default global;

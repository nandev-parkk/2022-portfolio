import { css } from "@emotion/react";
import commonStyles from "./common";

const { color, transition, font } = commonStyles;

const global = css`
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

  @font-face {
    font-family: "Rajdhani";
    src: url("../fonts/Rajdhani/Rajdhani-Light.eot");
    src: url("../fonts/Rajdhani/Rajdhani-Light.eot?#iefix")
        format("embedded-opentype"),
      url("../fonts/Rajdhani/Rajdhani-Light.woff2") format("woff2"),
      url("../fonts/Rajdhani/Rajdhani-Light.woff") format("woff"),
      url("../fonts/Rajdhani/Rajdhani-Light.ttf") format("truetype");
    font-weight: ${font.weight.light};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Rajdhani";
    src: url("../fonts/Rajdhani/Rajdhani-Regular.eot");
    src: url("../fonts/Rajdhani/Rajdhani-Regular.eot?#iefix")
        format("embedded-opentype"),
      url("../fonts/Rajdhani/Rajdhani-Regular.woff2") format("woff2"),
      url("../fonts/Rajdhani/Rajdhani-Regular.woff") format("woff"),
      url("../fonts/Rajdhani/Rajdhani-Regular.ttf") format("truetype");
    font-weight: ${font.weight.regular};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Rajdhani";
    src: url("../fonts/Rajdhani/Rajdhani-Medium.eot");
    src: url("../fonts/Rajdhani/Rajdhani-Medium.eot?#iefix")
        format("embedded-opentype"),
      url("../fonts/Rajdhani/Rajdhani-Medium.woff2") format("woff2"),
      url("../fonts/Rajdhani/Rajdhani-Medium.woff") format("woff"),
      url("../fonts/Rajdhani/Rajdhani-Medium.ttf") format("truetype");
    font-weight: ${font.weight.medium};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Rajdhani";
    src: url("../fonts/Rajdhani/Rajdhani-SemiBold.eot");
    src: url("../fonts/Rajdhani/Rajdhani-SemiBold.eot?#iefix")
        format("embedded-opentype"),
      url("../fonts/Rajdhani/Rajdhani-SemiBold.woff2") format("woff2"),
      url("../fonts/Rajdhani/Rajdhani-SemiBold.woff") format("woff"),
      url("../fonts/Rajdhani/Rajdhani-SemiBold.ttf") format("truetype");
    font-weight: ${font.weight.semiBold};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Rajdhani";
    src: url("../fonts/Rajdhani/Rajdhani-Bold.eot");
    src: url("../fonts/Rajdhani/Rajdhani-Bold.eot?#iefix")
        format("embedded-opentype"),
      url("../fonts/Rajdhani/Rajdhani-Bold.woff2") format("woff2"),
      url("../fonts/Rajdhani/Rajdhani-Bold.woff") format("woff"),
      url("../fonts/Rajdhani/Rajdhani-Bold.ttf") format("truetype");
    font-weight: ${font.weight.bold};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("../fonts/Montserrat/Montserrat-Thin.eot");
    src: url("../fonts/Montserrat/Montserrat-Thin.eot?#iefix")
        format("embedded-opentype"),
      url("../fonts/Montserrat/Montserrat-Thin.woff2") format("woff2"),
      url("../fonts/Montserrat/Montserrat-Thin.woff") format("woff"),
      url("../fonts/Montserrat/Montserrat-Thin.ttf") format("truetype");
    font-weight: ${font.weight.thin};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("../fonts/Montserrat/Montserrat-ExtraLight.eot");
    src: url("../fonts/Montserrat/Montserrat-ExtraLight.eot?#iefix")
        format("embedded-opentype"),
      url("../fonts/Montserrat/Montserrat-ExtraLight.woff2") format("woff2"),
      url("../fonts/Montserrat/Montserrat-ExtraLight.woff") format("woff"),
      url("../fonts/Montserrat/Montserrat-ExtraLight.ttf") format("truetype");
    font-weight: ${font.weight.extraLight};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("../fonts/Montserrat/Montserrat-Light.eot");
    src: url("../fonts/Montserrat/Montserrat-Light.eot?#iefix")
        format("embedded-opentype"),
      url("../fonts/Montserrat/Montserrat-Light.woff2") format("woff2"),
      url("../fonts/Montserrat/Montserrat-Light.woff") format("woff"),
      url("../fonts/Montserrat/Montserrat-Light.ttf") format("truetype");
    font-weight: ${font.weight.light};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("../fonts/Montserrat/Montserrat-Regular.eot");
    src: url("../fonts/Montserrat/Montserrat-Regular.eot?#iefix")
        format("embedded-opentype"),
      url("../fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"),
      url("../fonts/Montserrat/Montserrat-Regular.woff") format("woff"),
      url("../fonts/Montserrat/Montserrat-Regular.ttf") format("truetype");
    font-weight: ${font.weight.regular};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("../fonts/Montserrat/Montserrat-Medium.eot");
    src: url("../fonts/Montserrat/Montserrat-Medium.eot?#iefix")
        format("embedded-opentype"),
      url("../fonts/Montserrat/Montserrat-Medium.woff2") format("woff2"),
      url("../fonts/Montserrat/Montserrat-Medium.woff") format("woff"),
      url("../fonts/Montserrat/Montserrat-Medium.ttf") format("truetype");
    font-weight: ${font.weight.medium};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("../fonts/Montserrat/Montserrat-SemiBold.eot");
    src: url("../fonts/Montserrat/Montserrat-SemiBold.eot?#iefix")
        format("embedded-opentype"),
      url("../fonts/Montserrat/Montserrat-SemiBold.woff2") format("woff2"),
      url("../fonts/Montserrat/Montserrat-SemiBold.woff") format("woff"),
      url("../fonts/Montserrat/Montserrat-SemiBold.ttf") format("truetype");
    font-weight: ${font.weight.semiBold};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("../fonts/Montserrat/Montserrat-Bold.eot");
    src: url("../fonts/Montserrat/Montserrat-Bold.eot?#iefix")
        format("embedded-opentype"),
      url("../fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"),
      url("../fonts/Montserrat/Montserrat-Bold.woff") format("woff"),
      url("../fonts/Montserrat/Montserrat-Bold.ttf") format("truetype");
    font-weight: ${font.weight.bold};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("../fonts/Montserrat/Montserrat-ExtraBold.eot");
    src: url("../fonts/Montserrat/Montserrat-ExtraBold.eot?#iefix")
        format("embedded-opentype"),
      url("../fonts/Montserrat/Montserrat-ExtraBold.woff2") format("woff2"),
      url("../fonts/Montserrat/Montserrat-ExtraBold.woff") format("woff"),
      url("../fonts/Montserrat/Montserrat-ExtraBold.ttf") format("truetype");
    font-weight: ${font.weight.extraBold};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("../fonts/Montserrat/Montserrat-Black.eot");
    src: url("../fonts/Montserrat/Montserrat-Black.eot?#iefix")
        format("embedded-opentype"),
      url("../fonts/Montserrat/Montserrat-Black.woff2") format("woff2"),
      url("../fonts/Montserrat/Montserrat-Black.woff") format("woff"),
      url("../fonts/Montserrat/Montserrat-Black.ttf") format("truetype");
    font-weight: ${font.weight.black};
    font-style: normal;
    font-display: swap;
  }
`;

export default global;

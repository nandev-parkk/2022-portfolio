import { css } from "@emotion/react";
import commonStyles from "styles/common";

export default function SectionTitle(props) {
  return (
    <hgroup css={titleGroup(props)}>
      <h3 css={title(props)} className="montserrat">
        {props.title}
      </h3>
    </hgroup>
  );
}

const { color, font } = commonStyles;

const titleGroup = (props) => css`
  text-align: ${props.align === "right" && "right"};
`;

const title = (props) => css`
  color: ${color.white};
  font-size: 32px;
  font-weight: ${font.weight.regular};
  position: relative;
  display: inline-block;
  margin-bottom: 60px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 150px;
    height: 2px;
    background-color: ${color.white};
    right: ${props.align === "right" ? "auto" : "-170px"};
    left: ${props.align === "right" ? "-170px" : "auto"};
  }

  @media screen and (max-width: 425px) {
    font-size: ${font.size.lg};
    margin-bottom: 20px;

    &::before {
      display: none;
    }
  }

  @media screen and (min-width: 426px) and (max-width: 767px) {
    font-size: ${font.size.lg};
    margin-bottom: 20px;

    &::before {
      width: 80px;
      right: ${props.align === "right" ? "auto" : "-100px"};
      left: ${props.align === "right" ? "-100px" : "auto"};
    }
  }
`;

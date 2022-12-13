import { css } from "@emotion/react";
import commonStyles from "styles/common";

export default function SectionTitle({ title, align }) {
  return (
    <hgroup css={hgroup({ title, align })}>
      <h2 css={heading({ align })} className="montserrat">
        {title}
      </h2>
    </hgroup>
  );
}

const { color, font } = commonStyles;

const hgroup = ({ align }) => css`
  text-align: ${align === "right" && "right"};
`;

const heading = ({ align }) => css`
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
    right: ${align === "right" ? "auto" : "-170px"};
    left: ${align === "right" ? "-170px" : "auto"};
  }

  @media screen and (max-width: 425px) {
    font-size: ${font.size.xxl};
  }

  @media screen and (min-width: 426px) and (max-width: 1023px) {
    font-size: 26px;
  }

  @media screen and (max-width: 1023px) {
    margin-bottom: 20px;

    &::before {
      width: 80px;
      right: ${align === "right" ? "auto" : "-100px"};
      left: ${align === "right" ? "-100px" : "auto"};
    }
  }
`;

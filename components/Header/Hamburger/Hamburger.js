import { useContext } from "react";
import { IsOpenContext } from "contexts/store";
import commonStyles from "styles/common";
import { css } from "@emotion/react";

export default function Hamburger() {
  const { isOpen, handleClick } = useContext(IsOpenContext);

  return (
    <button type="button" onClick={handleClick} css={hamburger({ isOpen })}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

const { color, transition } = commonStyles;

const hamburger = ({ isOpen }) => css`
  display: none;
  transition: ${transition.short};
  position: relative;
  z-index: 1;

  span {
    display: block;
    width: 30px;
    height: 2px;
    background-color: ${isOpen ? color.black : color.white};
    transition: ${transition.short};

    &:nth-of-type(1) {
      transform: ${isOpen && "translateY(8px) rotate(-45deg)"};
    }

    &:nth-of-type(2) {
      transform: ${isOpen && "translateX(300%)"};
    }

    &:nth-of-type(3) {
      transform: ${isOpen && "translateY(-8px) rotate(45deg)"};
    }

    &:not(:last-child) {
      margin-bottom: 6px;
    }
  }

  @media screen and (max-width: 1023px) {
    display: block;
  }
`;

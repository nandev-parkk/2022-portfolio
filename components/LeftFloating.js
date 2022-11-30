import commonStyles from "styles/common";
import { css } from "@emotion/react";
import Link from "next/link";

export default function LeftFloating() {
  return (
    <aside css={floating}>
      <ul css={list}>
        <li>
          <Link className="link" href="#home">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" href="#about">
            About
          </Link>
        </li>
        <li>
          <Link className="link" href="#experience">
            Experience
          </Link>
        </li>
        <li>
          <Link className="link" href="#contact">
            Contact
          </Link>
        </li>
      </ul>
    </aside>
  );
}

const { color, transition } = commonStyles;

const floating = css`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 40px;
  color: ${color.white};
  transition: ${transition.short};

  @media screen and (max-width: 1023px) {
    transform: translate(-300%, -50%);
  }
`;

const list = css`
  li {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
`;

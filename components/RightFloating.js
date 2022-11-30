import commonStyles from "styles/common";
import { css } from "@emotion/react";
import Link from "next/link";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

export default function RightFloating() {
  return (
    <aside css={floating}>
      <ul css={list}>
        <li>
          <Link
            href={process.env.NEXT_PUBLIC_GITHUB}
            target="_blank"
            rel="noopenner noreferrer"
          >
            <FiGithub />
          </Link>
        </li>
        <li>
          <Link href="/" target="_blank" rel="noopenner noreferrer">
            <FiLinkedin />
          </Link>
        </li>
        <li>
          <Link
            href={process.env.NEXT_PUBLIC_INSTAGRAM}
            target="_blank"
            rel="noopenner noreferrer"
          >
            <FiInstagram />
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
  right: 40px;
  color: ${color.white};

  svg {
    stroke-width: 1.8;
    font-size: 20px;
    transition: ${transition.short};
  }
`;

const list = css`
  li {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
`;

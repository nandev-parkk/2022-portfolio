import commonStyles from "styles/common";
import { css } from "@emotion/react";
import Link from "next/link";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import { IsOpenContext } from "contexts/store";
import { useContext } from "react";

export default function Aside() {
  const { isOpen } = useContext(IsOpenContext);

  return (
    <aside css={aside({ isOpen })}>
      <ul css={list}>
        <li>
          <Link className="link" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" href="/">
            About
          </Link>
        </li>
        <li>
          <Link className="link" href="/">
            Experience
          </Link>
        </li>
        <li>
          <Link className="link" href="/">
            Contact
          </Link>
        </li>
      </ul>
      <nav css={nav}>
        <div css={sns}>
          <Link
            href={process.env.NEXT_PUBLIC_GITHUB}
            target="_blank"
            rel="noopenner noreferrer"
          >
            <FiGithub />
          </Link>
          <Link href="/" target="_blank" rel="noopenner noreferrer">
            <FiLinkedin />
          </Link>
          <Link
            href={process.env.NEXT_PUBLIC_INSTAGRAM}
            target="_blank"
            rel="noopenner noreferrer"
          >
            <FiInstagram />
          </Link>
        </div>
        <div css={contact}>
          <Link href="mailto:nandev.parkk@gmail.com" className="link">
            nandev.parkk@gmail.com
          </Link>
          <Link
            href={process.env.NEXT_PUBLIC_RESUME}
            target="_blank"
            rel="noopenner noreferrer"
            className="link"
          >
            Resume
          </Link>
        </div>
      </nav>
    </aside>
  );
}

const { color, font, transition } = commonStyles;

const aside = ({ isOpen }) => css`
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: min(400px, 70%);
  background-color: ${color.white};
  transition: ${transition.short};
  transform: ${!isOpen && "translateX(200%)"};
  color: ${color.black};
  padding: 100px 40px;

  @media screen and (max-width: 425px) {
    padding: 100px 26px;
  }
`;

const list = css`
  li {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }

  @media screen and (max-width: 767px) {
    li {
      font-size: ${font.size.sm};

      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }
  }
`;

const nav = css`
  position: absolute;
  bottom: 100px;

  @media screen and (max-width: 767px) {
    bottom: 40px;
  }
`;

const sns = css`
  margin-bottom: 20px;

  a {
    &:not(:last-child) {
      margin-right: 14px;
    }

    &:hover {
      svg {
        transform: translateY(-6px);
      }
    }

    svg {
      stroke-width: 1.8;
      font-size: ${font.size.xl};
      transition: ${transition.short};
    }
  }

  @media screen and (max-width: 425px) {
    a {
      svg {
        font-size: ${font.size.lg};
      }
    }
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

const contact = css`
  a:first-of-type {
    margin-right: 20px;
  }

  @media screen and (max-width: 767px) {
    a {
      font-size: ${font.size.sm};
    }
  }
`;

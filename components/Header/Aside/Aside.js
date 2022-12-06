import commonStyles from "styles/common";
import { IsOpenContext, IsObserverContext } from "contexts/store";
import { css } from "@emotion/react";
import Link from "next/link";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { scrollIntoView } from "utils/scrollIntoView";
import { getIntersectionObserver } from "utils/observer";

export default function Aside() {
  const { isOpen, setIsOpen } = useContext(IsOpenContext);
  const { observerRef } = useContext(IsObserverContext);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    const observer = getIntersectionObserver(setCurrentId);

    observerRef.current.forEach((el) => {
      observer.observe(el);
    });
  });

  return (
    <aside css={aside({ isOpen })}>
      <ul css={list}>
        {listItems.map((item, i) => (
          <li key={item.id}>
            <button
              type="button"
              css={btn({ currentId, i })}
              className="link"
              onClick={() => {
                scrollIntoView(observerRef, i);
                setIsOpen(!isOpen);
              }}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
      <nav
        css={nav}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
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

const listItems = [
  { id: "0", title: "Home" },
  { id: "1", title: "About" },
  { id: "2", title: "Experience" },
  { id: "3", title: "Contact" },
];

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
  transform: ${!isOpen ? "translateX(200%)" : "translateX(0)"};
  color: ${color.black};
  padding: 100px 40px;

  @media screen and (max-width: 425px) {
    padding: 100px 26px;
  }
`;

const list = css`
  display: inline-block;

  li {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }

  @media screen and (max-width: 425px) {
    li {
      font-size: ${font.size.sm};

      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }
  }
`;

const btn = ({ currentId, i }) => css`
  font-size: ${font.size.md};

  &::after {
    content: "";
    width: ${currentId === i && "100%"};
    height: 2px;
    background: ${color.yellow};
    position: absolute;
    bottom: -2px;
    left: ${currentId === i && "0"};
    transition: ${transition.short};
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
      stroke-width: 1.4;
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

  @media screen and (max-width: 425px) {
    a {
      font-size: ${font.size.sm};
    }
  }
`;

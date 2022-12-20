import commonStyles from "styles/common";
import logo from "public/images/logo.png";
import Aside from "./Aside/Aside";
import Hamburger from "./Hamburger/Hamburger";
import Link from "next/link";
import Image from "next/image";
import { css } from "@emotion/react";
import { useEffect, useState, useContext } from "react";
import { IsOpenContext } from "contexts/store";

export default function Header() {
  const [direction, setDirection] = useState("up");
  const { isOpen, setIsOpen } = useContext(IsOpenContext);

  useEffect(() => {
    window.addEventListener("wheel", (e) => {
      e.deltaY > 0 ? setDirection("down") : setDirection("up");
    });
  });

  return (
    <header css={header({ direction, isOpen })}>
      <Link href="/">
        <Image src={logo} alt="logo" width={70} />
      </Link>
      <nav css={nav}>
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
      </nav>
      <Hamburger />
      <Aside />
      <div
        css={bg({ isOpen })}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
    </header>
  );
}

const { color, transition } = commonStyles;

const header = ({ direction, isOpen }) => css`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  transition: ${transition.short};
  transform: ${!isOpen && direction === "down"
    ? "translateY(-80px)"
    : "translateY(0)"};

  @media screen and (max-width: 1023px) {
    padding: 0 20px;
    height: 70px;
  }
`;

const nav = css`
  a:not(:last-child) {
    margin-right: 20px;
  }

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const bg = ({ isOpen }) => css`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  display: ${isOpen ? "block" : "none"};
`;

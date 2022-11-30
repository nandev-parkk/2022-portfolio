import Header from "./Header/Header";
import Footer from "./Footer";
import commonStyles from "styles/common";
import { css } from "@emotion/react";
import { IsOpenContext } from "contexts/store";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    const body = window.document.body;
    isOpen ? body.classList.add("blur") : body.classList.remove("blur");
  }, [isOpen]);

  return (
    <IsOpenContext.Provider value={{ isOpen, handleClick }}>
      <Header />
      <main css={container({ isOpen })}>
        <div css={inner}>{children}</div>
        <Footer />
      </main>
    </IsOpenContext.Provider>
  );
}

const { transition } = commonStyles;

const container = ({ isOpen }) => css`
  padding: 0 200px;
  filter: ${isOpen && "blur(5px) brightness(0.7)"};
  transition: ${transition.short};

  @media screen and (max-width: 1023px) {
    padding: 0 40px;
  }
`;

const inner = css`
  width: min(1000px, 100%);
  margin: 0 auto;
`;

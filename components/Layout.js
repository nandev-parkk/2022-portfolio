import Header from "./Header/Header";
import Footer from "./Footer";
import commonStyles from "styles/common";
import { useContext, useEffect } from "react";
import { IsOpenContext } from "contexts/store";
import { css } from "@emotion/react";

export default function Layout({ children }) {
  const { isOpen, setIsOpen } = useContext(IsOpenContext);

  useEffect(() => {
    const body = window.document.body;
    isOpen ? body.classList.add("blur") : body.classList.remove("blur");
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (1023 < window.innerWidth) {
        setIsOpen(false);
      }
    });
  });

  return (
    <>
      <Header />
      <main css={container({ isOpen })}>
        <div css={inner}>{children}</div>
        <Footer />
      </main>
    </>
  );
}

const { transition } = commonStyles;

const container = ({ isOpen }) => css`
  padding: 0 200px;
  filter: ${isOpen && "blur(5px) brightness(0.7)"};
  transition: ${transition.short};

  @media screen and (max-width: 1023px) {
    padding: 0 20px;
  }
`;

const inner = css`
  width: min(1000px, 100%);
  margin: 0 auto;
`;

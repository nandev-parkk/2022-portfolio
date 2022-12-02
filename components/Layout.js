import Header from "./Header/Header";
import Footer from "./Footer";
import commonStyles from "styles/common";
import { css } from "@emotion/react";
import { IsOpenContext, IsObserverContext } from "contexts/store";
import { useEffect, useRef, useState } from "react";
import { Provider } from "react-redux";
import { store } from "modules/redux/store";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef([]);

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
    <Provider store={store}>
      <IsObserverContext.Provider value={{ observerRef }}>
        <IsOpenContext.Provider value={{ isOpen, setIsOpen }}>
          <Header />
          <main css={container({ isOpen })}>
            <div css={inner}>{children}</div>
            <Footer />
          </main>
        </IsOpenContext.Provider>
      </IsObserverContext.Provider>
    </Provider>
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

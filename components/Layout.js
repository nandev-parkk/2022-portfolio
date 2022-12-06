import Header from "./Header/Header";
import Footer from "./Footer";
import commonStyles from "styles/common";
import { css } from "@emotion/react";
import { IsOpenContext, IsObserverContext } from "contexts/store";
import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveToken } from "modules/redux/tokenSlice";
import HttpContext from "modules/http";

export default function Layout({ children }) {
  const dispatch = useDispatch();
  const Http = useContext(HttpContext);
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef([]);
  const { csrfToken } = useSelector((state) => state.tokenReducer);

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

  useEffect(() => {
    if (csrfToken !== "") {
      return;
    }

    Http.getCsrfToken()
      .then((res) => {
        dispatch(
          saveToken({
            csrfToken: res.csrfToken,
          })
        );
      })
      .catch(console.error);
  }, []);

  return (
    <IsObserverContext.Provider value={{ observerRef }}>
      <IsOpenContext.Provider value={{ isOpen, setIsOpen }}>
        <Header />
        <main css={container({ isOpen })}>
          <div css={inner}>{children}</div>
          <Footer />
        </main>
      </IsOpenContext.Provider>
    </IsObserverContext.Provider>
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

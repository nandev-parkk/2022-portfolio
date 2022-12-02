import Seo from "components/Seo";
import HiddenTitle from "components/HiddenTitle";
import Visual from "components/Visual";
import About from "components/About";
import Experience from "components/Experience";
import Contact from "components/Contact";
import LeftFloating from "components/LeftFloating";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveToken } from "modules/redux/tokenSlice";
import HttpContext from "modules/Http";

export default function Home() {
  const dispatch = useDispatch();
  const Http = useContext(HttpContext);

  useEffect(() => {
    Http.getCsrfToken().then((res) => {
      dispatch(
        saveToken({
          csrfToken: res.csrfToken,
        })
      );
    });
  }, []);

  return (
    <>
      <Seo title="Park SangHun | Portfolio" />
      <HiddenTitle title="Park SangHun Portfolio" tag="h1" />
      <Visual />
      <About />
      <Experience />
      <Contact />
      <LeftFloating />
    </>
  );
}

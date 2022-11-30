import About from "components/About";
import Visual from "components/Visual";
import HiddenTitle from "components/HiddenTitle";
import Seo from "components/Seo";
import LeftFloating from "components/LeftFloating";
import Experience from "components/Experience";
import Contact from "components/Contact";

export default function Home() {
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

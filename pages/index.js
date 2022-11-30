import Seo from "components/Seo";
import HiddenTitle from "components/HiddenTitle";
import Visual from "components/Visual";
import About from "components/About";
import Experience from "components/Experience";
import Contact from "components/Contact";
import LeftFloating from "components/LeftFloating";

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

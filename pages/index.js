import HiddenTitle from "components/HiddenTitle";
import Visual from "components/Visual";
import About from "components/About";
import Experience from "components/Experience";
import Contact from "components/Contact";
import LeftFloating from "components/LeftFloating";
import Project from "components/Project";

export default function Home() {
  return (
    <>
      <HiddenTitle title="Park SangHun Portfolio" tag="h1" />
      <Visual />
      <About />
      <Experience />
      <Project />
      <Contact />
      <LeftFloating />
    </>
  );
}

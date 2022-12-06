import Seo from "components/Seo";
import HiddenTitle from "components/HiddenTitle";
import Visual from "components/Visual";
import About from "components/About";
import Experience from "components/Experience";
import Contact from "components/Contact";
import LeftFloating from "components/LeftFloating";
import profileImg from "public/images/profile.jpeg";

export default function Home() {
  return (
    <>
      <Seo
        title="Park SangHun | Portfolio"
        desc="프론트엔드 개발자 박상훈의 포트폴리오"
        image={profileImg}
      />
      <HiddenTitle title="Park SangHun Portfolio" tag="h1" />
      <Visual />
      <About />
      <Experience />
      <Contact />
      <LeftFloating />
    </>
  );
}

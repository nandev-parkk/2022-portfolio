import { css } from "@emotion/react";
import HiddenTitle from "./HiddenTitle";
import SectionTitle from "./SectionTitle";
import { useContext } from "react";
import { IsObserverContext } from "contexts/store";

export default function Experience() {
  const { observerRef } = useContext(IsObserverContext);

  return (
    <section
      id="experience"
      ref={(el) => (observerRef.current[2] = el)}
      css={experience}
    >
      <HiddenTitle title="experience" />
      <SectionTitle title="Experience" align="right" />
    </section>
  );
}

const experience = css`
  margin: 140px 0;
  height: 1000px;
`;

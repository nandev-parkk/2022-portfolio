import SectionTitle from "./SectionTitle";
import { ObserverContext } from "contexts/store";
import { useContext } from "react";
import { css } from "@emotion/react";

export default function Experience() {
  const { observerRef } = useContext(ObserverContext);

  return (
    <section
      id="experience"
      ref={(el) => (observerRef.current[2] = el)}
      css={experience}
    >
      <SectionTitle title="Experience" align="right" />
    </section>
  );
}

const experience = css`
  margin: 140px 0;
  height: 1000px;
`;

import { css } from "@emotion/react";
import HiddenTitle from "./HiddenTitle";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section css={experience}>
      <HiddenTitle title="experience" />
      <SectionTitle title="Experience" align="right" />
    </section>
  );
}

const experience = css`
  padding: 140px 0;
`;

import SectionTitle from "../SectionTitle";
import Tabs from "./Tabs/Tabs";
import { ObserverContext } from "contexts/store";
import commonStyles from "styles/common";
import { useContext, useState } from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import TabContent from "./TabContent/TabContent";

export default function Experience() {
  const [isActive, setIsActive] = useState(0);
  const { observerRef } = useContext(ObserverContext);

  return (
    <section
      id="experience"
      ref={(el) => (observerRef.current[2] = el)}
      css={experience}
    >
      <SectionTitle title="Experience" align="right" />
      <div css={content}>
        <Tabs isActive={isActive} setIsActive={setIsActive} />
        <TabContent isActive={isActive} />
      </div>
    </section>
  );
}

const { color, font, transition } = commonStyles;

const experience = css`
  margin: 140px 0;

  @media screen and (max-width: 767px) {
    margin: 80px 0;
  }
`;

const content = css``;

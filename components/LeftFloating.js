import commonStyles from "styles/common";
import { getIntersectionObserver } from "utils/observer";
import { css } from "@emotion/react";
import { useContext, useEffect, useState } from "react";
import { scrollIntoView } from "utils/scrollIntoView";
import { ObserverContext } from "contexts/store";

export default function LeftFloating() {
  const { observerRef } = useContext(ObserverContext);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    const observer = getIntersectionObserver(setCurrentId);

    observerRef.current.forEach((el) => {
      observer.observe(el);
    });
  });

  return (
    <aside css={floating}>
      <ul css={list}>
        {listItems.map((item, i) => (
          <li key={item.id}>
            <button
              type="button"
              css={btn({ currentId, i })}
              className="link"
              onClick={() => {
                scrollIntoView(observerRef, i);
              }}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

const listItems = [
  { id: "0", title: "Home" },
  { id: "1", title: "About" },
  { id: "2", title: "Experience" },
  { id: "3", title: "Contact" },
];

const { color, font, transition } = commonStyles;

const floating = css`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 40px;
  color: ${color.white};
  transition: ${transition.short};

  @media screen and (max-width: 1023px) {
    transform: translate(-300%, -50%);
  }
`;

const list = css`
  li {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
`;

const btn = ({ currentId, i }) => css`
  font-size: ${font.size.md};

  &::after {
    content: "";
    width: ${currentId === i && "100%"};
    height: 2px;
    background: ${color.yellow};
    position: absolute;
    bottom: -2px;
    left: ${currentId === i && "0"};
    transition: ${transition.short};
  }
`;

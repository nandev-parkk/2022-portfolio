import { css } from "@emotion/react";
import Button from "components/Button";
import commonStyles from "styles/common";

export default function Tabs({ isActive, setIsActive }) {
  return (
    <nav css={tabs}>
      {tabItems.map((item, i) => (
        <Button
          key={item.id}
          type="button"
          style={tab({ isActive, i })}
          onClick={() => setIsActive(i)}
        >
          {item.title}
        </Button>
      ))}
    </nav>
  );
}

const tabItems = [
  { id: "0", title: "에이아이댑스" },
  { id: "1", title: "코리아웹센터" },
];

const { color, font, transition, borderRadius } = commonStyles;

const tabs = css`
  border-bottom: 1px solid ${color.white};
  margin-bottom: 20px;
`;

const tab = ({ isActive, i }) => css`
  font-size: ${font.size.md};
  font-weight: ${isActive === i && font.weight.bold};
  padding: 14px 28px;
  color: ${isActive === i && color.black};
  background-color: ${isActive === i && color.white};
  border-radius: ${borderRadius.short} ${borderRadius.short} 0 0;

  &:hover {
    color: ${color.black};
    background-color: ${color.white};
    transition: ${transition.short};
  }

  @media screen and (max-width: 425px) {
    font-size: ${font.size.sm};
    padding: 12px 18px;
  }
`;

import { useMediaQuery } from "react-responsive";

export function Mobile({ children }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile && children;
}

export function Tablet({ children }) {
  const isTablet = useMediaQuery({ minWidth: 768 });
  return isTablet && children;
}

export function Laptop({ children }) {
  const isLaptop = useMediaQuery({ minWidth: 1024 });
  return isLaptop && children;
}

export function DeskTop({ children }) {
  const BigLaptop = useMediaQuery({ minWidth: 1440 });
  return BigLaptop && children;
}

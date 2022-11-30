export const scrollIntoView = (el, i) => {
  el.current[i].scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};

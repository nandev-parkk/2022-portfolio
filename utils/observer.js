export const getIntersectionObserver = (setState) => {
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && 0.8 < entry.intersectionRatio) {
        setState(sectionItems.indexOf(`#${entry.target.id}`));
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  const observer = new IntersectionObserver(callback, options);

  return observer;
};

const sectionItems = ["#home", "#about", "#experience", "#contact"];

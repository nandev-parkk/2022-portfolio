export const checkName = (text) => {
  return /^[가-힣a-zA-Z]{2,20}$/.test(text);
};

export const checkEmail = (text) => {
  return /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z.-]+$/.test(text);
};

export const checkText = (text) => {
  return /^[ㄱ-ㅎ가-힣a-zA-Z0-9~!?@#$%^&*()_+=`₩{}|:;'",./-]{3,}$/.test(text);
};

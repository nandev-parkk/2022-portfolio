export const checkName = (text) => {
  return /^[가-힣a-zA-Z]{2,20}$/.test(text);
};

export const checkEmail = (text) => {
  return /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z.-]+$/.test(text);
};

// ], \ 추가해야함
export const checkText = (text) => {
  return /^[ㄱ-ㅎ가-힣ㅏ-ㅣa-zA-Z0-9\s~!?@#$%^&*<>[()_+=`₩{}|:;'",./-]{3,}$/.test(
    text
  );
};

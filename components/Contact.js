import HiddenTitle from "./HiddenTitle";
import SectionTitle from "./SectionTitle";
import commonStyles from "styles/common";
import Form from "./Form";
import TextField from "./TextField";
import { css } from "@emotion/react";
import TextArea from "./TextArea";
import { useEffect, useRef, useReducer } from "react";

export default function Contact() {
  const labelRef = useRef([]);
  const [value, valueDispatch] = useReducer(valueReducer, VALUE_INITIAL_STATE);

  useEffect(() => {
    labelRef.current.forEach((el) => {
      el.innerHTML = el.innerText
        .split("")
        .map(
          (letter, i) =>
            `<span style="transition-delay: ${i * 50}ms">${letter}</span>`
        )
        .join("");
    });
  }, []);

  return (
    <section css={contact} id="contact">
      <HiddenTitle title="contact" />
      <SectionTitle title="Contact" />
      <p css={desc}>어떤 내용의 연락이라도 답변 드리겠습니다.</p>
      <Form legend="문의 하기">
        <div css={inputGroup}>
          <TextField
            type="text"
            name="name"
            value={value.name}
            onChange={(e) => {
              valueDispatch({
                type: "name",
                name: e.target.value,
              });
            }}
            required
            autoFocus
          />
          <label htmlFor="name" ref={(el) => (labelRef.current[0] = el)}>
            name
          </label>
        </div>
        <div css={inputGroup}>
          <TextField
            type="email"
            name="email"
            value={value.email}
            onChange={(e) => {
              valueDispatch({
                type: "email",
                email: e.target.value,
              });
            }}
            required
          />
          <label htmlFor="email" ref={(el) => (labelRef.current[1] = el)}>
            email
          </label>
        </div>
        <div css={inputGroup}>
          <TextField
            type="text"
            name="title"
            value={value.title}
            onChange={(e) => {
              valueDispatch({
                type: "title",
                title: e.target.value,
              });
            }}
            required
          />
          <label htmlFor="title" ref={(el) => (labelRef.current[2] = el)}>
            title
          </label>
        </div>
        <div css={inputGroup}>
          <TextArea
            name="content"
            value={value.content}
            onChange={(e) => {
              valueDispatch({
                type: "content",
                content: e.target.value,
              });
            }}
            required
          />
          <label htmlFor="content" ref={(el) => (labelRef.current[3] = el)}>
            content
          </label>
        </div>
        <button css={submit}>문의하기</button>
      </Form>
    </section>
  );
}

const VALUE_INITIAL_STATE = {
  name: "",
  email: "",
  title: "",
  content: "",
};

const valueReducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.name };
    case "email":
      return { ...state, email: action.email };
    case "title":
      return { ...state, title: action.title };
    case "content":
      return { ...state, content: action.content };
  }
};

const { color, transition } = commonStyles;

const contact = css`
  padding: 140px 0;
`;

const desc = css`
  margin-bottom: 60px;
`;

const inputGroup = css`
  width: min(400px, 100%);
  position: relative;

  &:not(:last-child) {
    margin-bottom: 60px;
  }

  & input,
  & textarea {
    padding: 8px;
  }

  & input {
    &:focus {
      border-color: ${color.yellow};

      & + label {
        span {
          color: ${color.yellow};
          transform: translateY(-20px);
        }
      }
    }
  }

  & textarea {
    & + label {
      top: 8px;
    }

    &:focus {
      border-color: ${color.yellow};

      & + label {
        span {
          color: ${color.yellow};
          transform: translateY(-34px);
        }
      }
    }
  }

  & label {
    position: absolute;
    top: 0;
    left: 8px;

    & span {
      display: inline-block;
      transition: ${transition.short};
    }
  }
`;

const submit = css`
  color: ${color.white};
  border-radius: 4px;
  border: 1px solid ${color.white};
`;

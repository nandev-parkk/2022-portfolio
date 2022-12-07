import HiddenTitle from "./HiddenTitle";
import SectionTitle from "./SectionTitle";
import commonStyles from "styles/common";
import Form from "./Form";
import TextField from "./TextField";
import { css } from "@emotion/react";
import TextArea from "./TextArea";
import { useEffect, useRef, useReducer, useContext } from "react";
import { checkName, checkEmail, checkText } from "utils/validator";
import Link from "next/link";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import { IsObserverContext } from "contexts/store";
import HttpContext from "modules/http";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  const labelRef = useRef([]);
  const [value, valueDispatch] = useReducer(valueReducer, VALUE_INITIAL_STATE);
  const [validate, validateDispatch] = useReducer(
    validateReducer,
    VALIDATE_INITIAL_STATE
  );
  const { name, email, title, content } = value;
  const { isName, isEmail, isTitle, isContent } = validate;
  const { observerRef } = useContext(IsObserverContext);
  const http = useContext(HttpContext);

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

  const submitContact = (e) => {
    e.preventDefault();

    http
      .postContact(value)
      .then(() => {
        alert("문의 주셔서 감사합니다. 빠른 시일 내에 답변 드리겠습니다.");
        router.reload();
      })
      .catch(() => {
        alert("에러가 발생했습니다. 다시 시도해주세요.");
        router.reload();
      });
  };

  return (
    <section
      id="contact"
      ref={(el) => (observerRef.current[3] = el)}
      css={contact}
    >
      <HiddenTitle title="contact" />
      <SectionTitle title="Contact" />
      <div css={contents}>
        <div css={items}>
          <p css={desc}>
            어떤 내용의 연락이라도 주신다면,
            <br />
            성심성의껏 답변 드리겠습니다.
          </p>
          <nav css={sns}>
            <Link
              href={process.env.NEXT_PUBLIC_GITHUB}
              target="_blank"
              rel="noopenner noreferrer"
            >
              <FiGithub />
            </Link>
            <Link href="/" target="_blank" rel="noopenner noreferrer">
              <FiLinkedin />
            </Link>
            <Link
              href={process.env.NEXT_PUBLIC_INSTAGRAM}
              target="_blank"
              rel="noopenner noreferrer"
            >
              <FiInstagram />
            </Link>
          </nav>
        </div>
        <Form legend="문의 하기" onSubmit={submitContact}>
          <div css={[inputGroup, nameInputGroup({ name, isName })]}>
            <TextField
              type="text"
              id="name"
              name="name"
              value={value.name}
              onChange={(e) => {
                valueDispatch({
                  type: "name",
                  name: e.target.value,
                });
                validateDispatch({
                  type: "isName",
                  isName: checkName(e.target.value),
                });
              }}
              required
            />
            <label
              htmlFor="name"
              css={[label, nameLabel({ name, isName })]}
              ref={(el) => (labelRef.current[0] = el)}
            >
              name
            </label>
          </div>
          <div css={[inputGroup, emailInputGroup({ email, isEmail })]}>
            <TextField
              type="email"
              id="email"
              name="email"
              value={value.email}
              onChange={(e) => {
                valueDispatch({
                  type: "email",
                  email: e.target.value,
                });
                validateDispatch({
                  type: "isEmail",
                  isEmail: checkEmail(e.target.value),
                });
              }}
              required
            />
            <label
              htmlFor="email"
              css={[label, emailLabel({ email, isEmail })]}
              ref={(el) => (labelRef.current[1] = el)}
            >
              email
            </label>
          </div>
          <div css={[inputGroup, titleInputGroup({ title, isTitle })]}>
            <TextField
              type="text"
              id="title"
              name="title"
              value={value.title}
              onChange={(e) => {
                valueDispatch({
                  type: "title",
                  title: e.target.value,
                });
                validateDispatch({
                  type: "isTitle",
                  isTitle: checkText(e.target.value),
                });
              }}
              required
            />
            <label
              htmlFor="title"
              css={[label, titleLabel({ title, isTitle })]}
              ref={(el) => (labelRef.current[2] = el)}
            >
              title
            </label>
          </div>
          <div css={[inputGroup, contentInputGroup({ content, isContent })]}>
            <TextArea
              id="content"
              name="content"
              value={value.content}
              onChange={(e) => {
                valueDispatch({
                  type: "content",
                  content: e.target.value,
                });
                validateDispatch({
                  type: "isContent",
                  isContent: checkText(e.target.value),
                });
              }}
              required
            />
            <label
              htmlFor="content"
              css={[label, contentLabel({ content, isContent })]}
              ref={(el) => (labelRef.current[3] = el)}
            >
              content
            </label>
          </div>
          <button
            css={submit}
            disabled={
              name === "" ||
              email === "" ||
              title === "" ||
              content === "" ||
              !isName ||
              !isEmail ||
              !isTitle ||
              !isContent
            }
          >
            문의하기
          </button>
        </Form>
      </div>
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
    default:
      return state;
  }
};

const VALIDATE_INITIAL_STATE = {
  isName: false,
  isEmail: false,
  isTitle: false,
  isContent: false,
};

const validateReducer = (state, action) => {
  switch (action.type) {
    case "isName":
      return { ...state, isName: action.isName };
    case "isEmail":
      return { ...state, isEmail: action.isEmail };
    case "isTitle":
      return { ...state, isTitle: action.isTitle };
    case "isContent":
      return { ...state, isContent: action.isContent };
    default:
      return state;
  }
};

const { color, font, transition } = commonStyles;

const contact = css`
  margin: 140px 0;
`;

const contents = css`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column;

    form {
      margin: 0 auto;
    }
  }
`;

const items = css``;

const desc = css`
  margin-bottom: 40px;

  @media screen and (max-width: 425px) {
    font-size: ${font.size.sm};
  }
`;

const sns = css`
  a {
    &:not(:last-child) {
      margin-right: 14px;
    }

    &:hover {
      svg {
        transform: translateY(-6px);
      }
    }

    svg {
      stroke-width: 1.8;
      font-size: ${font.size.xl};
      transition: ${transition.short};
    }
  }

  @media screen and (max-width: 425px) {
    a {
      svg {
        font-size: ${font.size.lg};
      }
    }
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const inputGroup = css`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 60px;
  }

  &::after {
    position: absolute;
    bottom: -22px;
    left: 8px;
    color: ${color.red};
    font-size: ${font.size.xxs};
  }

  & input,
  & textarea {
    padding: 8px;
    font-size: ${font.size.md};
  }

  & input {
    &:focus {
      & + label {
        span {
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
      & + label {
        span {
          transform: translateY(-34px);
        }
      }
    }
  }

  @media screen and (max-width: 425px) {
    & input,
    & textarea {
      font-size: ${font.size.sm};
    }
  }
`;

const nameInputGroup = ({ name, isName }) => css`
  & input {
    border-color: ${isName
      ? color.white
      : name !== "" && !isName
      ? color.red
      : null};
  }

  &::after {
    content: "숫자 및 특수문자를 제외한 2글자 이상 입력해주세요.";
    display: ${name !== "" && !isName ? "block" : "none"};
  }
`;

const emailInputGroup = ({ email, isEmail }) => css`
  & input {
    border-color: ${isEmail
      ? color.white
      : email !== "" && !isEmail
      ? color.red
      : null};
  }

  &::after {
    content: "이메일 형식을 올바르게 입력해주세요.";
    display: ${email !== "" && !isEmail ? "block" : "none"};
  }
`;

const titleInputGroup = ({ title, isTitle }) => css`
  & input {
    border-color: ${isTitle
      ? color.white
      : title !== "" && !isTitle
      ? color.red
      : null};
  }

  &::after {
    content: "3글자 이상 입력해주세요.";
    display: ${title !== "" && !isTitle ? "block" : "none"};
  }
`;

const contentInputGroup = ({ content, isContent }) => css`
  & textarea {
    border-color: ${isContent
      ? color.white
      : content !== "" && !isContent
      ? color.red
      : null};
  }

  &::after {
    content: "3글자 이상 입력해주세요.";
    display: ${content !== "" && !isContent ? "block" : "none"};
  }
`;

const label = css`
  position: absolute;
  top: 0;
  left: 8px;

  & span {
    display: inline-block;
    transition: ${transition.short};
  }

  @media screen and (max-width: 425px) {
    & span {
      font-size: ${font.size.sm};
    }
  }
`;

const nameLabel = ({ name, isName }) => css`
  & span {
    color: ${isName ? color.white : name !== "" && !isName ? color.red : null};
    transform: ${isName
      ? "translateY(-20px)"
      : name !== "" && !isName
      ? "translateY(-20px)"
      : null};
  }
`;

const emailLabel = ({ email, isEmail }) => css`
  & span {
    color: ${isEmail
      ? color.white
      : email !== "" && !isEmail
      ? color.red
      : null};
    transform: ${isEmail
      ? "translateY(-20px)"
      : email !== "" && !isEmail
      ? "translateY(-20px)"
      : null};
  }
`;

const titleLabel = ({ title, isTitle }) => css`
  & span {
    color: ${isTitle
      ? color.white
      : title !== "" && !isTitle
      ? color.red
      : null};
    transform: ${isTitle
      ? "translateY(-20px)"
      : title !== "" && !isTitle
      ? "translateY(-20px)"
      : null};
  }
`;

const contentLabel = ({ content, isContent }) => css`
  & span {
    color: ${isContent
      ? color.white
      : content !== "" && !isContent
      ? color.red
      : null};
    transform: ${isContent
      ? "translateY(-34px)"
      : content !== "" && !isContent
      ? "translateY(-34px)"
      : null};
  }
`;

const submit = css`
  color: ${color.white};
  border-radius: 4px;
  border: 1px solid ${color.white};
  padding: 14px 20px;
  width: 100%;
  font-size: ${font.size.md};
  transition: ${transition.short};

  &:disabled {
    color: ${color.gray};
    border-color: ${color.gray};
  }

  @media screen and (max-width: 425px) {
    font-size: ${font.size.sm};
  }
`;

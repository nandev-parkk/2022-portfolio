import SectionTitle from "./SectionTitle";
import commonStyles from "styles/common";
import Form from "./Form";
import TextField from "./TextField";
import TextArea from "./TextArea";
import Button from "./Button";
import { HttpContext, ObserverContext } from "contexts/store";
import { checkName, checkEmail, checkText } from "utils/validator";
import { useEffect, useRef, useReducer, useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  const [value, valueDispatch] = useReducer(valueReducer, VALUE_INITIAL_STATE);
  const { name, email, title, content } = value;

  const [validate, validateDispatch] = useReducer(
    validateReducer,
    VALIDATE_INITIAL_STATE
  );
  const { isName, isEmail, isTitle, isContent } = validate;

  const [errMsg, errMsgDispatch] = useReducer(
    errMsgReducer,
    ERRMSG_INITIAL_STATE
  );

  const { nameErrMsg, emailErrMsg, titleErrMsg, contentErrMsg } = errMsg;

  const router = useRouter();
  const { observerRef } = useContext(ObserverContext);

  const http = useContext(HttpContext);

  // input label animation
  const labelRef = useRef([]);
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

  // submit contact
  const submitContact = (e) => {
    e.preventDefault();

    http
      .postContact(value)
      .then(() => {
        alert("문의 주셔서 감사합니다. 빠른 시일 내에 답변 드리겠습니다.");
        router.reload();
      })
      .catch((err) => {
        if (500 <= err.response.status) {
          alert("에러가 발생했습니다. 잠시 후 다시 시도해주세요.");
          router.reload();
        }

        const filterArr = err.response.data.message.filter(
          (item) => !item.msg.includes("Invalid value")
        );

        filterArr.forEach((item) => {
          errMsgDispatch({ type: item.param, payload: item.msg });
        });
      });
  };

  return (
    <section
      id="contact"
      ref={(el) => (observerRef.current[3] = el)}
      css={contact}
    >
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
            <Link
              href={process.env.NEXT_PUBLIC_LINKEDIN}
              target="_blank"
              rel="noopenner noreferrer"
            >
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
          <div css={inputGroup}>
            <TextField
              type="text"
              id="name"
              style={input}
              name="name"
              value={value.name}
              onChange={(e) => {
                valueDispatch({
                  type: "name",
                  payload: e.target.value,
                });
                validateDispatch({
                  type: "isName",
                  payload: checkName(e.target.value),
                });
              }}
            />
            <label
              htmlFor="name"
              css={[label, nameLabel({ name, isName })]}
              ref={(el) => (labelRef.current[0] = el)}
            >
              name
            </label>
            <span css={errText}>
              {((!!name && !isName) || (!isName && nameErrMsg)) &&
                "숫자 및 특수문자를 제외하고 2자 이상 20자 이하로 입력해주세요."}
            </span>
          </div>
          <div css={inputGroup}>
            <TextField
              type="email"
              id="email"
              style={input}
              name="email"
              value={value.email}
              onChange={(e) => {
                valueDispatch({
                  type: "email",
                  payload: e.target.value,
                });
                validateDispatch({
                  type: "isEmail",
                  payload: checkEmail(e.target.value),
                });
              }}
            />
            <label
              htmlFor="email"
              css={[label, emailLabel({ email, isEmail })]}
              ref={(el) => (labelRef.current[1] = el)}
            >
              email
            </label>
            <span css={errText}>
              {((!!email && !isEmail) || (!isEmail && emailErrMsg)) &&
                "이메일 형식을 올바르게 입력해주세요."}
            </span>
          </div>
          <div css={inputGroup}>
            <TextField
              type="text"
              id="title"
              style={input}
              name="title"
              value={value.title}
              onChange={(e) => {
                valueDispatch({
                  type: "title",
                  payload: e.target.value,
                });
                validateDispatch({
                  type: "isTitle",
                  payload: checkText(e.target.value),
                });
              }}
            />
            <label
              htmlFor="title"
              css={[label, titleLabel({ title, isTitle })]}
              ref={(el) => (labelRef.current[2] = el)}
            >
              title
            </label>
            <span css={errText}>
              {((!!title && !isTitle) || (!isTitle && titleErrMsg)) &&
                "3자 이상 입력해주세요."}
            </span>
          </div>
          <div css={inputGroup}>
            <TextArea
              id="content"
              name="content"
              value={value.content}
              style={textarea}
              onChange={(e) => {
                valueDispatch({
                  type: "content",
                  payload: e.target.value,
                });
                validateDispatch({
                  type: "isContent",
                  payload: checkText(e.target.value),
                });
              }}
            />
            <label
              htmlFor="content"
              css={[label, contentLabel({ content, isContent })]}
              ref={(el) => (labelRef.current[3] = el)}
            >
              content
            </label>
            <span css={errText}>
              {((!!content && !isContent) || (!isContent && contentErrMsg)) &&
                "3자 이상 입력해주세요."}
            </span>
          </div>
          <Button style={submit}>문의하기</Button>
        </Form>
      </div>
    </section>
  );
}

const ERRMSG_INITIAL_STATE = {
  nameErrMsg: "",
  emailErrMsg: "",
  titleErrMsg: "",
  contentErrMsg: "",
};

const errMsgReducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, nameErrMsg: action.payload };
    case "email":
      return { ...state, emailErrMsg: action.payload };
    case "title":
      return { ...state, titleErrMsg: action.payload };
    case "content":
      return { ...state, contentErrMsg: action.payload };
    default:
      return state;
  }
};

const VALUE_INITIAL_STATE = {
  name: "",
  email: "",
  title: "",
  content: "",
};

const valueReducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "title":
      return { ...state, title: action.payload };
    case "content":
      return { ...state, content: action.payload };
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
      return { ...state, isName: action.payload };
    case "isEmail":
      return { ...state, isEmail: action.payload };
    case "isTitle":
      return { ...state, isTitle: action.payload };
    case "isContent":
      return { ...state, isContent: action.payload };
    default:
      return state;
  }
};

const { color, font, transition, borderRadius } = commonStyles;

const contact = css`
  margin: 140px 0;

  @media screen and (max-width: 767px) {
    margin: 80px 0;
  }
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
      transform: translateY(8px);
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

const input = css`
  width: 100%;
  display: block;
  border-bottom: 1px solid ${color.white};
  caret-color: ${color.white};
  color: ${color.white};
  transition: ${transition.short};
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

const nameLabel = ({ name }) => css`
  & span {
    transform: ${!!name && "translateY(-20px)"};
  }
`;

const emailLabel = ({ email }) => css`
  & span {
    transform: ${!!email && "translateY(-20px)"};
  }
`;

const titleLabel = ({ title }) => css`
  & span {
    transform: ${!!title && "translateY(-20px)"};
  }
`;

const contentLabel = ({ content }) => css`
  & span {
    transform: ${!!content && "translateY(-34px)"};
  }
`;

const errText = css`
  position: absolute;
  bottom: -22px;
  left: 8px;
  color: ${color.red};
  font-size: ${font.size.xxs};
`;

const textarea = css`
  border: 1px solid ${color.white};
  border-radius: 4px;
  display: block;
  width: 100%;
  height: 200px;
  transition: ${transition.short};
  caret-color: ${color.white};
  color: ${color.white};
`;

const submit = css`
  color: ${color.white};
  border-radius: ${borderRadius.short};
  border: 1px solid ${color.white};
  padding: 14px 20px;
  width: 100%;
  font-size: ${font.size.md};
  transition: ${transition.short};

  &:hover {
    background-color: ${color.white};
    transition: ${transition.short};
    color: ${color.black};
  }

  &:disabled {
    color: ${color.gray};
    border-color: ${color.gray};
  }

  @media screen and (max-width: 425px) {
    font-size: ${font.size.sm};
  }
`;

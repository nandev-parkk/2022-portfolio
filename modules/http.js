import axios from "axios";
import { createContext } from "react";
import { store } from "./redux/store";

class Http {
  constructor() {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    axios.interceptors.request.use(
      (config) => {
        config.headers["nandev-portfolio-csrf-token"] =
          store.getState().tokenReducer.csrfToken;

        return config;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  async postContact(data) {
    const { name, email, title, content } = data;

    const res = await axios.post("/contact", {
      name,
      email,
      title,
      content,
      isRead: "0",
    });

    return res.data;
  }

  // async getCsrfToken() {
  //   const res = await axios.get("/auth/csrfToken");

  //   return res.data;
  // }
}

const HttpContext = createContext(new Http());
export default HttpContext;

import axios from "axios";
import { createContext } from "react";

class Http {
  constructor() {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  }

  async postContact(data) {
    const { name, email, title, content } = data;

    const result = await axios.post("/contact", {
      name,
      email,
      title,
      content,
      isRead: "0",
    });

    return result;
  }
}

const HttpContext = createContext(new Http());
export default HttpContext;

import axios from "axios";

export default class Http {
  constructor(csrfToken) {
    this.csrfToken = csrfToken;
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    axios.interceptors.request.use((config) => {
      if (this.csrfToken) {
        config.headers["csrf-token"] = this.csrfToken;
      }

      return config;
    }, console.error);
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

  async getCsrfToken() {
    const res = await axios.get("/auth/csrfToken");

    return res.data;
  }
}

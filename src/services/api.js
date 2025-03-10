import axios from "axios";
// const baseURL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  // baseURL: baseURL,
  baseURL: "https://naruto-classic-wiki-api.vercel.app",
});

export { api };

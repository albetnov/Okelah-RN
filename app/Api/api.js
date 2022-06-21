import axios from "axios";

export const baseURL = "https://anitop.vercel.app";

export const client = axios.create({
  baseURL: baseURL,
});

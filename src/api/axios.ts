import axios from "axios";

const api = axios.create({
  timeout: 3 * 60 * 1000, // 3 minutes
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };

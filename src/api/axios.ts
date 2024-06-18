import { getApiTokenFromCookie } from "@/app/_lib/utils/cookie.util";
import axios, { AxiosError } from "axios";

const api = axios.create({
  timeout: 3 * 60 * 1000, // 3 minutes
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("login-token")}`,
  },
});

export { api };

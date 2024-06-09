import axios from "axios";

const api = axios.create({
  timeout: 3 * 60 * 1000, // 3 minutes
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmciLCJhdXRoIjoiUk9MRV9OIiwiZXhwIjoxNzE3OTM4MjA4fQ.zsOP3JYfA0w04x4ynwm6kWElL97fioorQ2bmZS3Rmgw`,
  },
});

export { api };

import axios, { AxiosError } from "axios";

import { useGetToken } from "../../src/hooks";

const http = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Accept: "application/json",
    Content: "application/json",
  },
});

http.interceptors.request.use(
  function (config) {
    const token = useGetToken();

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    console.error("Error in the interceptor!!!");
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    if (error.response?.status === 401) {
      window.location.href = "/";
      return Promise.reject();
    }
    return Promise.reject(error);
  }
);

export default http;

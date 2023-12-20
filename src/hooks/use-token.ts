import { useCallback } from "react";

export const useToken = () => {
  const setToken = useCallback((token: string) => {
    sessionStorage.setItem("token", token);
  }, []);

  const getToken = useCallback(() => sessionStorage.getItem("token"), []);

  const deleteToken = useCallback(() => sessionStorage.removeItem("token"), []);

  return {
    setToken,
    getToken,
    deleteToken,
  };
};

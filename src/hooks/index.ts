export const usePersistToken = () => {
  return (token: string) => {
    sessionStorage.setItem("token", token);
  };
};

export const useGetToken = () => {
  return sessionStorage.getItem("token");
};

export const useDeleteToken = () => {
  return sessionStorage.removeItem("token");
};

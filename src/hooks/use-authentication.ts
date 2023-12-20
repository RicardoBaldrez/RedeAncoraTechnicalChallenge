import { useCallback } from "react";
import axios, { AxiosResponse } from "axios";
import { encode as base64Encode } from "base-64";

interface Response {
  authenticate: () => Promise<AxiosResponse<{ access_token: string }>>;
}

export const useAuth = (code: string, state: string): Response => {
  const authenticate = useCallback(async () => {
    const codedAuth = base64Encode(state);

    return axios.post<{ access_token: string }>(
      "https://accounts.spotify.com/api/token",
      {
        code: code,
        redirect_uri: "http://localhost:3000/auth",
        grant_type: "authorization_code",
      },
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + codedAuth,
        },
      }
    );
  }, [code, state]);

  return { authenticate };
};

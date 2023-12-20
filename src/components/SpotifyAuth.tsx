import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { useToken, useAuth } from "../hooks";

export const SpotifyAuth = () => {
  const { setToken } = useToken();
  const navigate = useNavigate();

  // @ts-ignore
  const code = new URL(window.location).searchParams.get("code") ?? '';
  // @ts-ignore
  const state = new URL(window.location).searchParams.get("state") ?? '';

  const { authenticate } = useAuth(code, state);

  useEffect(() => {
    authenticate()
      .then(response => {
        setToken(response.data.access_token);
        navigate('/logged-area/new-releases');
      })
      .catch(() => navigate('/error-page'))
  }, [navigate, setToken, authenticate]);

  return ''
};

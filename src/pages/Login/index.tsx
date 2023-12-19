/* eslint-disable jsx-a11y/alt-text */
import React, { ReactElement, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "./assets/login.svg";

import { Wrapper, Content, ErrorNotificação } from "./styles";
import { usePersistToken } from "../../hooks";
import axios from "axios";

const Login = (): ReactElement => {
  const [clientId, setClientId] = useState<string>("");
  const [clientSecret, setClientSecret] = useState<string>("");
  const [errorNotification, setErrorNotification] = useState<boolean>(false);

  const navigate = useNavigate();

  const setToken = usePersistToken();

  const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const searchParams = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
    });

    await axios
      .post("https://accounts.spotify.com/api/token", searchParams)
      .then((response) => {
        setToken(response?.data?.access_token);
        navigate("/logged-area/new-releases");
      })
      .catch((error) => {
        console.error({ error });
        setErrorNotification(true);
      });
  };

  const ErrorNotification = () => {
    return (
      <ErrorNotificação>
        <p>
          Erro ao se logar{" "}
          <span onClick={() => setErrorNotification(false)}>X</span>
        </p>
      </ErrorNotificação>
    );
  };

  useEffect(() => {
    if (errorNotification) {
      setTimeout(() => {
        setErrorNotification(false);
      }, 5000);
    }
  }, [errorNotification]);

  return (
    <>
      {errorNotification && <ErrorNotification />}
      <Wrapper>
        <Content>
          <Logo />
        </Content>
        <Content>
          <div>
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXhha25kd21ucHNhNG1lYmNteHFmbmNlb3FhdDA0cWRzMG8wNXV3OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/iH1pvl2ECqOMKASI1p/giphy.gif"
              width="150"
              height="150"
            />
            <form onSubmit={onSubmitForm}>
              <label htmlFor="clientId">Client ID</label>
              <input
                type="text"
                name="clientId"
                id="clientId"
                onChange={(e: any) => setClientId(e.target.value)}
              />
              <label htmlFor="clientSecret">Client Secret</label>
              <input
                type="text"
                name="clientSecret"
                id="clientSecret"
                onChange={(e: any) => setClientSecret(e.target.value)}
              />
              <button>Fazer Login</button>
            </form>
            <footer>© 2023 - RedeAncora</footer>
          </div>
        </Content>
      </Wrapper>
    </>
  );
};

export default Login;

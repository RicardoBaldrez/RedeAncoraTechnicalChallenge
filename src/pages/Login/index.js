/* eslint-disable jsx-a11y/alt-text */
import React, { ReactElement, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "./assets/login.svg";

import { Wrapper, Content, ErrorNotificação } from "./styles";
import { usePersistToken } from "../../hooks";
import axios from "axios";

const Login = (): ReactElement => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorNotification, setErrorNotification] = useState(false);

  // console.log({ user });
  // console.log({ password });

  // const navigate = useNavigate();

  const setToken = usePersistToken();

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const client_id = "b63b0ac39cac4a0499073a0181235c3";
    // const client_id = "b63b0ac39cac4a0499073a0181235c3c";
    const client_secret = "8ce1180971ac46a48f2ab7ef6d540d37";

    const searchParams = new URLSearchParams({
      grant_type: "client_credentials",
      client_id,
      client_secret,
    });

    console.log({ searchParams });

    axios
      .post("https://accounts.spotify.com/api/token", searchParams)
      .then((response) => {
        setToken(response?.data?.access_token);
        setUser("");
        setPassword("");
        // navigate("/");
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
              <label htmlFor="user">E-mail ou nome de usuário</label>
              <input
                type="text"
                id="user"
                onChange={setUser}
                placeholder="E-mail ou nome de usuário"
              />
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                onChange={setPassword}
                placeholder="Senha"
              />
              <button>Fazer Login</button>
            </form>
          </div>
        </Content>
      </Wrapper>
    </>
  );
};

export default Login;

/* eslint-disable jsx-a11y/alt-text */
import React, { ReactElement, useState, useEffect, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

import { Wrapper, Content, Form, Error } from "./styles";
import { ReactComponent as Logo } from "./assets/login.svg";

const Login = (): ReactElement => {
  const [clientId, setClientId] = useState<string>("");
  const [clientSecret, setClientSecret] = useState<string>("");
  const [errorNotification, setErrorNotification] = useState<boolean>(false);

  const onSubmitForm = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!clientId || !clientSecret) {
      setErrorNotification(true);
      return;
    }

    const scope = 'user-read-private user-read-email user-top-read user-follow-read';
    const searchParamsCodeFlow = new URLSearchParams({
      response_type: 'code',
      client_id: clientId,
      scope: scope,
      redirect_uri: 'http://localhost:3000/auth',
      state: `${clientId}:${clientSecret}`,
    });

    // @ts-ignore
    window.location = `https://accounts.spotify.com/authorize?${searchParamsCodeFlow}`
  }, [clientId, clientSecret]);

  const ErrorNotification = () => {
    return (
      <Error>
        <p>
          Preencha o Client ID e/ou Client Secrets
          <span onClick={() => setErrorNotification(false)}>X</span>
        </p>
      </Error>
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
            <Form onSubmit={onSubmitForm}>
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
            </Form>
            <footer>© 2023 - WaveBeat</footer>
          </div>
        </Content>
      </Wrapper>
    </>
  );
};

export default Login;

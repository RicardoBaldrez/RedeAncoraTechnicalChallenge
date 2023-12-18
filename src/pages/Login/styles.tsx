import styled from 'styled-components';

import '../../css-global.css';

export const Wrapper = styled.div`
  border: 5px solid yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #00000048;
`

export const Content = styled.div`
  border: 5px solid red;
  width: 25%;
  height: 60%;
  display: flex;
  align-items: center;
  & div {
    flex-basis: 100%;
    border: 2px solid white;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    & form {
      border: 2px solid yellow;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`

export const ErrorNotificação = styled.div`
  color: white;
  font-weight: 500;
  background-color: var(--primary-red);
  position: fixed;
  top: 0;
  right: 0;
  margin: 30px;
  width: 180px;
  border-radius: 5px;
  & p {
    margin: 0;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    & span {
      cursor: pointer;
    }
  }
`

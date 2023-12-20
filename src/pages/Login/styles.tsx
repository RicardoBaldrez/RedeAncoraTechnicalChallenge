import styled from 'styled-components';

import '../../css-global.css';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #141414;
  & div:nth-child(2) {
    background-color: #00000077;
    border-radius: 0px 5px 5px 0px;
    color: #fff;
    font-weight: 500;
  }
`

export const Content = styled.div`
  width: 20%;
  height: 60%;
  display: flex;
  padding: 15px;
  border-radius: 5px 0px 0px 5px;
  align-items: center;
  background-color: #000;
  & div {
    flex-basis: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    & img {
    }
    & footer {
      color: var(--primary-gray);
      font-size: .8rem;
      margin-top: 70px;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  & label, input {
    flex-basis: 100%;
  }
  & label {
    margin-bottom: 5px 0;
  }
  & input {
    border: none;
    padding: 8px;
    margin: 5px 0 10px 0;
    border-radius: 5px;
  }
  & button {
    width: 100%;
    color: #fff;
    border: none;
    background-color: var(--secondary-blue-green);
    padding: 12px;
    margin-top: 15px;
    border-radius: 5px;
    font-weight: bold;
    font-size: .8rem;
    transition: all .3s ease-in-out;
    &:hover {
      cursor: pointer;
      background-color: var(--primary-purple);
    }
  }
`

export const Error = styled.div`
  color: white;
  font-weight: 500;
  background-color: var(--primary-red);
  position: fixed;
  top: 0;
  right: 0;
  margin: 40px;
  border-radius: 5px;
  & p {
    margin: 0;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    & span {
      margin-left: 20px;
      cursor: pointer;
    }
  }
`

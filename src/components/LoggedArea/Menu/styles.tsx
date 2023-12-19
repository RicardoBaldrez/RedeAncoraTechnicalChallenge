import styled from 'styled-components';

export const Wrapper = styled.div`
  background: black;
  height: 100%;
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  & img {
    border: 1px solid red;
  }
  & ul {
    border: 2px solid yellow;
    list-style: none;
    margin: 0;
    padding: 0;
    & li a {
      color: white;
      text-decoration: none;
    }
  }
`

import styled from 'styled-components';

export const Wrapper = styled.div`
  background: black;
  height: 100%;
  width: 160px;
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  top: 0;
  & ul {
    list-style: none;
    width: 100%;
    height: 100%;
    margin-top: 20px;
    & li {
      margin-bottom: 5px;
      padding: 10px;
      transition: all .3s ease-in-out;
      &:hover {
        background-color: #141414;
        cursor: pointer;
        & a {
          margin-left: 10px;
        }
      }
    }
    & li a {
      display: flex;
      align-items: center;
      font-size: .8rem;
      color: white;
      text-decoration: none;
      transition: all .3s ease-in-out;
      & svg {
        margin-right: 15px;
      }
    }
  }
`

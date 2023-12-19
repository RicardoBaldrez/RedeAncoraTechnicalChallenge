import styled from 'styled-components'

export const Overflow = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 19;
`

export const WrapperModal = styled.div<{ backgroundimage: string; }>`
  border-radius: 8px;
  width: 550px;
  padding: 15px;
  background-color: #fff;
  color: #fff;
  background-color: #141414;
  border: 1px solid #ababab;
  z-index: 99999;
  & > span {
    display: flex;
    justify-content: end;
    font-size: 1.3rem;
    &:hover {
      cursor: pointer;
    }
  }
  & header {
    height: 350px;
    display: flex;
    border-radius: 8px;
    background-image: url(${props => props.backgroundimage});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    padding: 10px;
    margin-top: 10px;
    & div {
      /* border: 2px solid black; */
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      color: #fff;
      & h1 {
        font-size: 2.5rem;
        font-weight: bold;
        text-shadow: 2px 2px 1px #000;
      }
      & p {
        color: #ababab;
        font-weight: 600;
        text-shadow: 2px 2px 1px #000;
      }
    }
    & span {
      font-size: 1em;
      font-weight: bold;
      position: absolute;
      right: 0;
      &:hover {
        cursor: pointer;
      }
    }
  }
  & > div {
    margin-top: 20px;
    text-align: start;
    & h1 {
      font-weight: 500;
      padding-bottom: 6px;
      margin-bottom: 12px;
      border-bottom: 2px solid;
      & span {
        margin-left: 10px;
      }
    }
    & ul {
      margin: 0;
      padding: 0;
      list-style: none;
      & li {
        margin: 5px 0;
        & span {
          margin-left: 10px;
        }
      }
    }
  }
`

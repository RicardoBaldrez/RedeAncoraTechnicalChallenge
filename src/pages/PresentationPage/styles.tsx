import styled from 'styled-components';

import '../../css-global.css';

export const Menu = styled.div<{ isfixed: boolean; }>`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 150px;
  position: ${props => props.isfixed ? 'sticky' : 'initial'};
  top: 0;
  background-color: #000;
  border: ${props => props.isfixed ? '1px solid #fff' : 'none'};
`

export const Wrapper = styled.div`
  padding: 50px;
  background-color: #000;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  & section {
    width: 40%;
  }
`

export const SectionBecomeSubscriber = styled.section<{ isfixed: boolean; }>`
  text-align: center;
  margin-top: ${props => props.isfixed ? '85px' : '0'};
  & h1 {
    font-size: 2rem;
  }
  & button {
    font-size: 1rem;
    color: #fff;
    font-weight: bold;
    background-color: var(--primary-purple);
    border: none;
    padding: 8px 20px;
    border-radius: 20px;
    background: var(--gradient-default);
  }
  `

export const SectionPlaylist = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 120px;
  & img {
    width: 200px;
    height: 200px;
  }
  & img:nth-child(2) {
    width: 300px;
    height: 300px;
  }
  & h1 {
    font-size: 2rem;
    margin-bottom: 0;
  }
`

export const SectionCustomizeYourListen = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 120px;
  & img {
    width: 300px;
    height: 400px;
  }
  & div {
    display: flex;
    flex-wrap: wrap;
    & h1 {
      font-size: 2rem;
      flex-basis: 100%;
      margin-bottom: 0;
      margin-top: 50px;
    }
  }
`

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  & img {
    border-radius: 50%;
  }
  & h1 {
    font-size: 2rem;
    font-weight: bold;
    margin: 20px;
    flex-basis: 100%;
  }
  & h2 {
    font-size: 1.5rem;
    font-weight: bold;
    flex-basis: 100%;
  }
`

export const SectionFollowingBands = styled.section`
  & h2 {
    margin: 20px;
  }
  & li {
    margin: 10px 0;
  }
`

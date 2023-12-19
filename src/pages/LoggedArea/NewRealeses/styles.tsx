import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  margin-bottom: 30px;
  border-radius: 5px;
  transition: all .2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0px 0px 0px 8px #141414;
  }
`

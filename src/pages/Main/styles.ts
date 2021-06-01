import styled from 'styled-components'; 
import { shade } from 'polished';

import mainBackground from '../../assets/pokemon_background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  //flex: 1;
  background: url(${mainBackground}) no-repeat center;
  background-size: cover;
  //align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 400px;
    margin-top: 20px;
    margin-bottom: 50px;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  img{
    max-width: 70px;
    max-height: 70px;
  }

  div{
    display: flex;
    flex-direction: row;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    color: #f4ede8;
    background-color: #53b9fe;
    text-decoration: none;

    width: 30px;
    
    border-radius: 3px 3px 3px 0px;
    transition: background-color 0.2s;

    &:hover{
      background: ${shade(0.2, '#53b9fe')}
    }
  }

  input {
    border-radius: 3px 0px 3px 3px;
    padding: 6px;
    border: 0;

    &::placeholder{
      color: #a8a8b3;
    }
  }
`
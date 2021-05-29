import styled from 'styled-components'; 

import mainBackground from '../../assets/pokemon_background2.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  //align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${mainBackground}) no-repeat center;
  background-size: cover;
  opacity: 0.9;
`;
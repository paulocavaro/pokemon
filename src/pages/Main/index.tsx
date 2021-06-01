import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
//import pokeapi from '../../services/api';

import pokemonLogo from '../../assets/pokemonLogo.png';
import pikachuTail from '../../assets/pikachuTail.png';

import { Container, Content, InputContent } from './styles';

const Main: React.FC = () => {

  const teste = () => {
    console.log('testando');
  }

  return (
    <Container>
      <Content>
        <img src={pokemonLogo} alt="Pokemon" />
        <InputContent>
          <img src={pikachuTail} alt="Pikachu" />
          <div>
            <input 
            type="text"
            placeholder="Search..."/>
            <a onClick={teste} href="List">
            <AiOutlineSearch size={20}/>
            </a>
          </div>
        </InputContent>
      </Content>
    </Container>
  )
}

export default Main;

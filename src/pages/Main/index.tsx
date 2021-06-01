import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
//import pokeapi from '../../services/api';

import pokemonLogo from '../../assets/pokemonLogo.png';
import pikachuTail from '../../assets/pikachuTail.png';

import { Container, Content, InputContent } from './styles';

const Main: React.FC = () => {

  const [pokemon, setPokemon] = useState('');

  return (
    <Container>
      <Content>
        <img src={pokemonLogo} alt="Pokemon" />
        <InputContent>
          <img src={pikachuTail} alt="Pikachu" />
          <div>
            <input
            value={pokemon} 
            type="text"
            placeholder="Search..."
            onChange={(e) => setPokemon(e.target.value)}
            />
            <Link to={`/pokemon/${pokemon}`}>
              <AiOutlineSearch size={20}/>
            </Link>
          </div>
        </InputContent>
      </Content>
    </Container>
  )
}

export default Main;

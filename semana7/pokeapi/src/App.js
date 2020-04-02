import React from 'react';
import styled from 'styled-components'
import axios from "axios";
import Pokemon from './components/Pokemon';
import PokemonType from './components/PokemonType'
import background from './img/background.jpg'


const ContainerApp = styled.div ` 
display:flex;
background-image: url(${props => props.img});
background-size: 100%;
height: 100vh;
`

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render () {
    return (
      <ContainerApp img={background}>
        <Pokemon></Pokemon>
        <PokemonType></PokemonType>

      </ContainerApp>
    )
  }
}

export default App;

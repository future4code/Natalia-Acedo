import React from 'react';
import styled from 'styled-components'
import axios from "axios";
import CreatePlaylist from './components/CreatePlaylist';
import AllPlaylists from './components/AllPlaylists';

const ContainerApp = styled.div `
display: flex;
align-items: center;
flex-direction: column;
`
const MainTitle = styled.h1 ` 
  color: #C81E1E;
  font-size: 40px;
`

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render () {
    return (
      <ContainerApp>
        <MainTitle>Spotif4</MainTitle>
        <CreatePlaylist></CreatePlaylist>
        <AllPlaylists></AllPlaylists>
      </ContainerApp>
    )
  }
}

export default App;

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


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render () {
    return (
      <ContainerApp>
        <h1>Spotif4</h1>
        <CreatePlaylist></CreatePlaylist>
        <AllPlaylists></AllPlaylists>
      </ContainerApp>
    )
  }
}

export default App;

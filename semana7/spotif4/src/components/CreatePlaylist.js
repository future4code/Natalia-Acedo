import React from 'react';
import styled from 'styled-components'
import axios from "axios";

const ContainerCreatePlaylist = styled.div ` 
    width: 40vw;
`

class CreatePlaylist extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            playlistName: ""    
        }
      }

      onChangeInputName = (event) => {
          this.setState({playlistName: event.target.value})
      }

      createPlaylist = () => {
            const body = {
              name: this.state.playlistName
          }

          axios
          .post (
              "https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists",
              body,
              {
                  headers: {
                      auth: "natalia-hamilton"
                  }
              }
          ).then (response => {
              console.log("Playlist saved")
          }).catch(err => {
              console.log("Create error")
          })

          this.setState({playlistName: ""})
      }
    
      render () {
        return (
            <ContainerCreatePlaylist>
                <h2>Crie uma playlist</h2>
                <label>Nome:</label>
                <input
                onChange={this.onChangeInputName}
                value={this.state.playlistName}
                placeholder="Nome da playlist"
                ></input>
                <button onClick={this.createPlaylist}>Criar</button>
            </ContainerCreatePlaylist>
          
        )
      }
}

export default CreatePlaylist
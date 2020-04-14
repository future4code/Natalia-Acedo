import React from 'react';
import styled from 'styled-components'
import axios from "axios";
import music from "../img/music.jpg"

const ContainerCreatePlaylist = styled.div` 
    padding: 50px 0;
    background-color:#231F25;
    color: #FFFFFF;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ContainerTeste = styled.div `
    justify-self:center;
    align-self: center; 
`

const InputCreate = styled.input` 
    margin: 10px;
`
const ButtonCreate = styled.button ` 
    height: 30px;
    border-radius: 5px;
    background-color: #35856D;
    color: #FFFFFF;
    :focus {     
    background-color: #CAC18B;   
    color: #231F25;
}
`

const ImageCreate = styled.img` 
    width: 10%;
    object-fit: cover;
    margin-left: 70px;
`   

class CreatePlaylist extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            playlistName: ""
        }
    }

    onChangeInputName = (event) => {
        this.setState({ playlistName: event.target.value })
    }

    createPlaylist = () => {
        const body = {
            name: this.state.playlistName
        }

        axios
            .post(
                "https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists",
                body,
                {
                    headers: {
                        auth: "natalia-hamilton"
                    }
                }
            ).then(response => {
                console.log("Playlist saved")
            }).catch(err => {
                console.log("Create error")
            })

        this.setState({ playlistName: "" })
    }

    render() {
        return (
            <ContainerCreatePlaylist>
                <ContainerTeste>
                    <h2>Criar Playlist</h2>
                    <label>Nome:</label>
                    <InputCreate
                        onChange={this.onChangeInputName}
                        value={this.state.playlistName}
                        placeholder="Nome da playlist"
                    ></InputCreate>
                    <ButtonCreate onClick={this.createPlaylist}>Criar</ButtonCreate>
                </ContainerTeste>
                <ImageCreate src={music}></ImageCreate>
            </ContainerCreatePlaylist>

        )
    }
}

export default CreatePlaylist
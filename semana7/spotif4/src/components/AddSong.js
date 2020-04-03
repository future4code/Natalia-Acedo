import React from 'react';
import styled from 'styled-components'
import axios from "axios";

const ContainerAddSongs = styled.div ` 
    display: flex;
    align-items: center;
    flex-direction: column;
`

class AddSong extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            nameSong: "",
            artistSong: "",
            linkSong: ""
        }

    }

    onChangeNameSong = (event) => {
        this.setState({nameSong: event.target.value})
    }

    onChangeArtistSong = (event) => {
        this.setState({artistSong: event.target.value})
    }

    onChangeLinkSong = (event) => {
        this.setState({linkSong: event.target.value})
    }

    addSong = (id) => {
        const body = {
            name: this.state.nameSong,
            artist: this.state.artistSong,
            url: this.state.linkSong
        }

        axios
        .post (
            `https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${id}/songs`,
            body,
            {
                headers: {
                    auth: "natalia-hamilton"
                }
            }
        ).then (response => {
            console.log("Music added")
        }).catch(err => {
            console.log("Add error")
        })

        this.setState({nameSong: "", artistSong: "", linkSong: ""})
    }

    render() {
        return (
            <ContainerAddSongs>
                <h2>Adicionar músicas na playlist</h2>
                <label>Música: </label>
                <input
                onChange={this.onChangeNameSong}
                value={this.state.nameSong}
                placeholder="Título da música"
                ></input>

                <label>Artista: </label>
                <input
                onChange={this.onChangeArtistSong}
                value={this.state.artistSong}
                placeholder="Artista"
                ></input>

                <label>Link da música: </label>
                <input
                onChange={this.onChangeLinkSong}
                value={this.state.linkSong}
                placeholder="Link"
                ></input>
                <button onClick={() => this.addSong(this.props.propsId)}>Adicionar Música</button>
            </ContainerAddSongs>
        )
    } 
}

export default AddSong
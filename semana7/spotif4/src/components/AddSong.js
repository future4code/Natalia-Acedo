import React from 'react';
import styled from 'styled-components'
import axios from "axios";
import addSong from "../img/addsong2.jpg"

const MainContainer = styled.div `
    display: grid;
    grid-template-columns: 9fr 5fr;
`

const ContainerAddSongs = styled.div ` 
    display: flex;
    align-items: flex-start;
    flex-direction: column;

`
const InputSong = styled.input `
    margin-bottom: 15px;
`

const ImageSong = styled.img `
    height: 150px;
    align-self:center;
`

const ButtonAddSong = styled.button ` 
    height: 40px;
    border-radius: 5px;
    background-color: #CAC18B;   
    color: #231F25;
    margin-top: 20px;
    cursor: pointer;
    :focus {     
    background-color: #35856D;
    color: #FFFFFF;
    }
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
            <MainContainer>
                <ContainerAddSongs>
                    <h2>Adicionar músicas na playlist</h2>
                    <label>Música: </label>
                    <InputSong
                    onChange={this.onChangeNameSong}
                    value={this.state.nameSong}
                    placeholder="Título da música"
                    ></InputSong>

                    <label>Artista: </label>
                    <InputSong
                    onChange={this.onChangeArtistSong}
                    value={this.state.artistSong}
                    placeholder="Artista"
                    ></InputSong>

                    <label>Link da música: </label>
                    <InputSong
                    onChange={this.onChangeLinkSong}
                    value={this.state.linkSong}
                    placeholder="Link"
                    ></InputSong>
                    <ButtonAddSong onClick={() => this.addSong(this.props.propsId)}>Adicionar Música</ButtonAddSong>
                </ContainerAddSongs>
                <ImageSong src={addSong}></ImageSong>
            </MainContainer>
        )
    } 
}

export default AddSong
import React from 'react';
import styled from 'styled-components'
import axios from "axios";
import AddSong from './AddSong'


const ContainerPlaylistDetails = styled.div ` 
`

const ButtonAddSong = styled.button ` 
`


const ContainerDetails =  styled.li` 
   margin-bottom: 10px;
   padding-bottom: 5px;
   border-bottom: 1px solid black;
   display: flex;
   justify-content: space-between;
`

class PlaylistDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            details: [],
            addSong: true
        }
    }

    componentDidMount() {
        this.getPlaylistDetails(this.props.propsPlaylist)
    }

    
    getPlaylistDetails = (id) => {
        axios
        .get (
            `https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${id}/songs`,
            {
                headers: {
                    auth: "natalia-hamilton"
                }
            }
        ).then (response => {
            this.setState({details: response.data.result.musics})
        })
    }

    onClickShowAddSong = () => {
        this.setState({addSong: !this.state.addSong})
    }

    
    render() {
        console.log(this.state.details)
        return (
            <ContainerPlaylistDetails>
            {this.state.addSong ? (
                <>
                <h2>Detalhes da playlist</h2>
                <ul>
                {this.state.details.map(song => {
                    return <ContainerDetails>
                    <p>{song.name}</p>
                    <p> {song.artist} </p>
                    <audio src={song.url} controls></audio>
                    </ContainerDetails>
                })}
                </ul> 
                <ButtonAddSong onClick={this.onClickShowAddSong}>Adicionar música</ButtonAddSong>
                </>
            ):( <>
            <AddSong propsId = {this.props.propsPlaylist}></AddSong>           
            <ButtonAddSong onClick={this.onClickShowAddSong}>Voltar à lista de playlist</ButtonAddSong>
            </>
            )            
            }
            </ContainerPlaylistDetails>
        )
    } 
}

export default PlaylistDetails
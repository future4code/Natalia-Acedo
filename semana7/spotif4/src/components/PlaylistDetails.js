import React from 'react';
import styled from 'styled-components'
import axios from "axios";
import AddSong from './AddSong'
import MusicPlayer from "../img/music-player.png";
import deleteIcon from "../img/delete.png";


const ContainerPlaylistDetails = styled.div ` 
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

const ContainerDetails =  styled.li` 
   margin-bottom: 10px;
   padding-bottom: 5px;
   border-bottom: 1px solid black;
   display: flex;
   justify-content: space-between;
`
const IconMusic = styled.img `
    height: 20px;
    align-self: center;
`
const ButtonDelete = styled.button ` 
   color: red;
   height: 50px;
   width: 50px;
   font-size: 20px;
   cursor: pointer;
   align-self: center;
   :focus {
       background-color: #CAC18B;
   }
`
const IconDelete = styled.img ` 
    height: 20px;
    align-self: center;
`

class PlaylistDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            details: [],
            addSong: true,
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
        this.getPlaylistDetails(this.props.propsPlaylist)
    }

    deleteMusic = (idPlaylist, idSong) => {
        axios
        .delete (
            `https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${idPlaylist}/songs/${idSong}`,
              {
                  headers: {
                      auth: "natalia-hamilton"
                  }
              }
        ).then(() => {
            this.getPlaylistDetails(this.props.propsPlaylist)
            console.log("Deleted music")
        }).catch(err =>{
            console.log("Delete error")
        })
        console.log(idPlaylist)
        console.log(idSong)
    }

    
    render() {
        return (
            <ContainerPlaylistDetails>
            {this.state.addSong ? (
                <>
                <h2>{this.props.propsNamePlaylist}</h2>
                <ul>
                {this.state.details.map(song => {
                    return <ContainerDetails>
                    <IconMusic src={MusicPlayer}></IconMusic>
                    <p>Música: {song.name}</p>
                    <p>Artista: {song.artist} </p>
                    <audio src={song.url} controls></audio>
                    <ButtonDelete 
                        onClick={() => this.deleteMusic(this.props.propsPlaylist, song.id)}
                        >
                            <IconDelete src={deleteIcon}></IconDelete>
                    </ButtonDelete>
                    </ContainerDetails>
                })}
                </ul> 
                <ButtonAddSong onClick={this.onClickShowAddSong}>Adicionar música</ButtonAddSong>
                </>
            ):( <>
            <AddSong propsId = {this.props.propsPlaylist}></AddSong>           
            <ButtonAddSong onClick={this.onClickShowAddSong}>Voltar para {this.props.propsNamePlaylist}</ButtonAddSong>
            </>
            )            
            }
            </ContainerPlaylistDetails>
        )
    } 
}

export default PlaylistDetails
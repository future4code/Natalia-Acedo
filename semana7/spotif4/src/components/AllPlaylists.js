import React from 'react';
import styled from 'styled-components';
import axios from "axios";
import PlaylistDetails from "./PlaylistDetails";  
import musicIcon from "../img/record.png";
import deleteIcon from "../img/delete.png";
import AddSong from './AddSong';

const ContainerAllPlaylists = styled.div ` 
    width: 100vw;
    display: flex;
    justify-content: center;
`
const MainContainer = styled.div ` 
    margin-top: 30px;
    width: 50%;
`

const ContainerPlaylists = styled.li ` 
   margin-bottom: 10px;
   padding-bottom: 5px;
   border-bottom: 1px solid black;
   display: grid;
   grid-template-columns: 1fr 15fr 1fr;
`

const IconPlaylist = styled.img `
    height: 30px;
    align-self: center;
`

const ParagraphPlaylist = styled.p ` 
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    margin-left: 15px;
    margin-right: 50%;
    :hover {
        background-color: #707571;
    }
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

const ButtonLibrary = styled.button `
    height: 40px;
    border-radius: 5px;
    background-color: #35856D;
    color: #FFFFFF;
    margin-top: 20px;
    cursor: pointer;
    :focus {     
    background-color: #CAC18B;   
    color: #231F25;
    }
`

class AllPlaylists extends React.Component {
    constructor(props) {
        super (props)

        this.state = {
            playlists: [],
            idPlaylist: -1,
            namePlaylist: undefined
        }
    }


    componentDidMount = () => {
        this.getPlaylists()
    }
    
    getPlaylists = () => {
        axios
        .get (
            "https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists",
              {
                  headers: {
                      auth: "natalia-hamilton"
                  }
              }
        ).then(response => {
            this.setState({playlists: response.data.result.list})
        })
    }

    deletePlaylist = (id) => {
        axios
        .delete (
            `https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${id}`,
              {
                  headers: {
                      auth: "natalia-hamilton"
                  }
              }
        ).then(() => {
            this.getPlaylists()
            console.log("Deleted playlist")
        }).catch(err =>{
            console.log("Delete error")
        })
    }

    onClickPlaylist = (id, name) => {
        this.setState({idPlaylist: id, namePlaylist: name})
    }

    onClickBackPlaylists = () => {
        this.setState({idPlaylist: -1})
    }



    render () {  
        return (
            <ContainerAllPlaylists>
                <MainContainer>
                    {this.state.idPlaylist === -1 ?
                    (<>
                    <h2>Minha Biblioteca</h2>
                    <ul>
                    {this.state.playlists.map( eachPlaylist => {
                        return <ContainerPlaylists>
                        <IconPlaylist src={musicIcon}></IconPlaylist>
                        <ParagraphPlaylist onClick = {() => this.onClickPlaylist(eachPlaylist.id, eachPlaylist.name)}> {eachPlaylist.name} </ParagraphPlaylist>
                        <ButtonDelete 
                        onClick={() => this.deletePlaylist(eachPlaylist.id)}
                        >
                            <IconDelete src={deleteIcon}></IconDelete>
                        </ButtonDelete>
                        </ContainerPlaylists>
                    })}
                    </ul>
                    <ButtonLibrary onClick={() => this.getPlaylists()}>Atualizar biblioteca
                    </ButtonLibrary>
                    </>
                    ): (
                    <>
                    <PlaylistDetails propsPlaylist={this.state.idPlaylist} propsNamePlaylist={this.state.namePlaylist}></PlaylistDetails>
                    <ButtonLibrary onClick={this.onClickBackPlaylists}>Voltar para Biblioteca</ButtonLibrary>
                    </>
                    ) }     
                </MainContainer>
            </ContainerAllPlaylists>         
        )
    }
}

export default AllPlaylists
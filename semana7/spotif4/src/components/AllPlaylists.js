import React from 'react';
import styled from 'styled-components'
import axios from "axios";
import PlaylistDetails from "./PlaylistDetails"    

const ContainerAllPlaylists = styled.div ` 
    margin-top: 30px;
    width: 40vw;
`

const ContainerPlaylists = styled.li ` 
   margin-bottom: 10px;
   padding-bottom: 5px;
   border-bottom: 1px solid black;
   display: flex;
   justify-content: space-between;
`

const ButtonDelete = styled.button ` 
   color: red;
   font-size: 20px;
   cursor: pointer;
`

class AllPlaylists extends React.Component {
    constructor(props) {
        super (props)

        this.state = {
            playlists: [],
            idPlaylist: -1
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

    onClickPlaylist = (id) => {
        this.setState({idPlaylist: id})
    }



    render () {   
        return (
            <ContainerAllPlaylists>
                {this.state.idPlaylist === -1 ?
                (<>
                <h2>Minhas Playlists</h2>
                <ul>
                {this.state.playlists.map( eachPlaylist => {
                    return <ContainerPlaylists>
                    <p onClick = {() => this.onClickPlaylist(eachPlaylist.id)}> {eachPlaylist.name} </p>
                    <ButtonDelete onClick={() => this.deletePlaylist(eachPlaylist.id)}>
                        X
                    </ButtonDelete>
                    </ContainerPlaylists>
                })}
                </ul>
                </>
                ): (<PlaylistDetails propsPlaylist={this.state.idPlaylist}></PlaylistDetails>) }            
            </ContainerAllPlaylists>         
        )
    }
}

export default AllPlaylists
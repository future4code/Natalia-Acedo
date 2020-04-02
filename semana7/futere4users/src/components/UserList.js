import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import UserDetails from './UserDetails';

const ContainerList = styled.div`
   display: flex;
   flex-direction: column;
   margin:100px;
   padding: 30px;

`
const ContainerUser = styled.li ` 
   width: 30%;
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

class UserList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userList: [],
            idUser: -1
        }

    }

    componentDidMount() {
        this.getUser()
      }


    getUser = () => {
        axios
        .get (
            "https://us-central1-future-apis.cloudfunctions.net/api/users",
            {
                headers: {
                    "api-token": "natalia-hamilton"
                }
            }
        )
        .then(response => {
            const userListApi = response.data.result
            this.setState({userList: userListApi})
        })
    }

    deleteUser = (id) => {
        axios
        .delete (
            `https://us-central1-future-apis.cloudfunctions.net/api/users/${id}`,

            {
                headers: {
                    "api-token": "natalia-hamilton"
                }
            }
        ).then(response => {
            alert("Usuário deletado!")
            this.getUser()
        }).catch(error => {
            alert("Algo não deu certo.")
        })
    }

    onClickUserDetails = (id) => {
        this.setState({idUser: id})
    }

    
    render() {
        return (
            <ContainerList>
                {this.state.idUser === -1 ?
                (<>
                <h1>Usuários Cadastrados</h1> 
                    <ul>
                        {this.state.userList.map(user => {
                            return <ContainerUser>
                                <p onClick = {() => this.onClickUserDetails(user.id)}> {user.name} </p>
                                <ButtonDelete 
                                onClick={ () => {
                                window.confirm("Tem certeza que deseja deletar?");
                                if (window.confirm) {
                                    this.deleteUser(user.id)
                                }
                            }}>
                                    X
                                </ButtonDelete>
                                
                            </ContainerUser>
                        })}
                    </ul>
                    </>
                    )
                    :(<UserDetails propsId={this.state.idUser}></UserDetails>) }
            </ContainerList>
        )
    }
}

export default UserList
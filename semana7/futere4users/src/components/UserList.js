import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

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
`

class UserList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userList: []
        }

    }

    componentDidMount() {
        this.getUser();
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
            console.log(response.data.result)

            this.setState({userList: userListApi})
        })
    }

    deleteUser = (id) => {
        axios
        .delete (
            "https://us-central1-future-apis.cloudfunctions.net/api/users",
            id,
            {
                headers: {
                    "api-token": "natalia-hamilton"
                }
            }
        ).then(response => {
            alert("Usuário deletado!")
        })
    }


    render() {
        return (
            <ContainerList>
                <h1>Usuários Cadastrados</h1> 
                    <ul>
                    {this.state.userList.map(user => {
                       return <ContainerUser>
                            {user.name} 
                            <ButtonDelete onClick={this.deleteUser(user.id)}>
                                X
                            </ButtonDelete>
                        </ContainerUser>   
                    })}
                    </ul>
            </ContainerList>
        )
    }
}

export default UserList
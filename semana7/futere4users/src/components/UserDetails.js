import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const ContainerUserDetails = styled.div ` 

`

class UserDetails extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            userDetailsList: []
        }
    }

    componentDidMount() {
        this.getUserDetails(this.props.propsId)
      }


    getUserDetails = (id) => {
        axios
        .get (
            `https://us-central1-future-apis.cloudfunctions.net/api/users/${id}`,
            {
                headers: {
                    "api-token": "natalia-hamilton"
                }
            }
        ).then(response => {
            this.setState({userDetailsList: response.data.result})
        })
    }

   

    render () {
        return (
            <ContainerUserDetails>
                <h1>Usuário selecionado</h1>
                <ul>
                    <li> {this.state.userDetailsList.name} </li>
                    <li>{this.state.userDetailsList.email} </li>

                </ul>
            </ContainerUserDetails>
        )
    }
}

export default UserDetails
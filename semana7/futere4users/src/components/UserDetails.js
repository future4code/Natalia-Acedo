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
            "https://us-central1-future-apis.cloudfunctions.net/api/users",
            {
                headers: {
                    "api-token": "natalia-hamilton"
                }
            }
        ).then(response => {
            const test = response.data.result
            this.setState({userDetailsList: response.data.result})
            console.log(test)
        })
    }

   

    render () {
        /* console.log(this.props.propsId) */
        return (
            <ContainerUserDetails>
                <h1>Usuário selecionado</h1>
                <ul>
                    {this.state.userDetailsList.map(user => {
                        return <li>{user.name}{user.email}</li>
                    })}
                </ul>
            </ContainerUserDetails>
        )
    }
}

export default UserDetails
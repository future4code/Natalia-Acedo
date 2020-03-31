import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const ContainerRegister = styled.div`
   display: flex;
   flex-direction: column;
   width: 300px;
   margin:100px;
   border: 1px solid black;
   padding: 30px;
`

const InputRegister = styled.input ` 
   border-radius: 5px;
   border: 1px solid black;
   margin: 10px;
   padding: 5px 2px;
`

const ButtonRegister = styled.button ` 
   color: white;
   background-color: darkblue;
   width: 30%;
   padding: 5px;
   align-self: center;
`

class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputName: "",
            inputEmail: ""
        }

    }

    createUser = () => {
        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        }

        this.setState({inputName:"", inputEmail: ""})

        axios
        .post(
            "https://us-central1-future-apis.cloudfunctions.net/api/users",
            body,
            {
                headers: {
                    "api-token": "natalia-hamilton"
                }
            }
        ).then (response => {
            alert("Dados Salvos!")
        })
        .catch(error => {
            alert("Algo não deu certo")
        })
    }

    onChangeInputName = (event) => {
        this.setState({inputName: event.target.value})
    }

    onChangeInputEmail = (event) => {
        this.setState({inputEmail: event.target.value})
    }


    render() {

        return (
            <ContainerRegister>
                <label>Nome:</label>
                <InputRegister
                placeholder = "Digite seu nome"
                value={this.state.inputName}
                onChange={this.onChangeInputName}
                >
                </InputRegister>

                <label>E-mail:</label>
                <InputRegister
                placeholder = "exemplo@mail.com"
                value={this.state.inputEmail}
                onChange={this.onChangeInputEmail}
                >
                </InputRegister>
                <ButtonRegister onClick={this.createUser}> Salvar </ButtonRegister>
            </ContainerRegister>
        )
    }
}

export default Register
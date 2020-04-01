import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import Register from './components/Register';
import UserList from './components/UserList';

const ContainerApp = styled.div `
`

const ButtonApp = styled.button ` 
  margin: 20px;
`

class App extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
          currentPage: false
        }
        
    }

    onClickApp = () => {
      this.setState({currentPage: !this.state.currentPage})
    }


  render() {
    return (
        <ContainerApp>
          {this.state.currentPage ? (
          <>
          <ButtonApp onClick={this.onClickApp}>Ir para página de lista</ButtonApp>
          <Register></Register>
          </>
          ): (
          <>
          <ButtonApp onClick={this.onClickApp}>Ir para página de registro</ButtonApp>
          <UserList></UserList>
          </>
          )
        }

        </ContainerApp>
    )
  }
}


export default App;

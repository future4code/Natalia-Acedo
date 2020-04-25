import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import { routes } from "../Router/index";
import user from "../../img/user.jpg"
import trips from "../../img/trips.jpg"

const MainContainer = styled.div ` 
  height: 75vh;
  padding: 20% 10%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Tittle = styled.h1` 
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  font-family: Roboto, sans-serif;
  letter-spacing: 3px;
`

const ImageHome = styled.img ` 
  height: 380px;
  border-radius: 200px;
  cursor: pointer;
`


class Home extends Component {
  render() {
    return (
      <div>
        <MainContainer>
          <div>
            <Tittle> Destinos interplanetários</Tittle>
            <ImageHome src={trips} onClick={this.props.goTripsApplication} />
          </div>
          <div>
          <Tittle>Entrar na tela do usuário</Tittle>
          <ImageHome src={user} onClick={this.props.goLogin}/>
          </div>
        </MainContainer>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goTripsApplication: () => dispatch(push(routes.tripsApplication)),
    goLogin: () => dispatch(push(routes.login))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Home);
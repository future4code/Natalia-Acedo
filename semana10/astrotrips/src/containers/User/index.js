import React from "react";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from "../Router/index";

import Button from "@material-ui/core/Button";
import styled from "styled-components";


const ContainerUser = styled.div`
  height: 60vh;
  margin-left: 10%;
`

const Tittle = styled.h1` 
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  font-family: Roboto, sans-serif;
  letter-spacing: 3px;
`


const ContainerButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  width: 40%;
  margin: 40px 0;
`

const ButtonStyled = styled(Button)`
  margin: 50px;
`

class User extends React.Component {

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token === null) {
      this.props.goLogin();
    }
  }

  handleLogout = () => {
    localStorage.clear();
    this.props.goHome()
  };

  render() {
    const isLogged = localStorage.getItem("token") !== null;
    return (
      <ContainerUser>
        <Tittle>Bem-vindo, astronauta!</Tittle>
        <ContainerButton>
          <ButtonStyled color="primary" variant="contained" type="submit" onClick={this.props.goTripesCreate}>Criar Viagem</ButtonStyled>
          <ButtonStyled color="primary" variant="contained" type="submit" onClick={this.props.goTripesDetails}>Ver viagens</ButtonStyled>
        </ContainerButton>
        {isLogged && <Button m={2} onClick={this.handleLogout} color="secondary" variant="contained" type="submit">Logout</Button>}
      </ContainerUser>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return {
    goLogin: () => dispatch(replace(routes.login)),
    goTripesCreate: () => dispatch(push(routes.tripsCreate)),
    goTripesDetails: () => dispatch(push(routes.trips)),
    goHome: () => dispatch(replace(routes.root))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(User);

import React from "react";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from "../Router/index";

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  handleLogout = () => {
    localStorage.clear();
    this.props.goHome()
  };

  render () {
    const isLogged = localStorage.getItem("token") !== null;
    return (
      <div>
        <h1>Bem-vindo, astronauta!</h1>
        <button onClick={this.props.goTripesCreate}>Criar Viagem</button>
        <button onClick={this.props.goTripesDetails}>Ver viagens</button>
        {isLogged && <button onClick={this.handleLogout}>Logout</button>}
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return {
    goTripesCreate: () => dispatch(push(routes.tripsCreate)),
    goTripesDetails: () => dispatch(push(routes.trips)),
    goHome: () => dispatch(replace(routes.root))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(User);

import React from "react";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from "../Router/index";

const User = props => {
  return (
    <div>
      <div>Página do usuário</div>
      <button onClick={props.goTripesCreate}>Criar Viagem</button>
      <button onClick={props.goTripesDetails}>Detalhes da viagem</button>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    goTripesCreate: () => dispatch(replace(routes.tripsCreate)),
    goTripesDetails: () => dispatch(replace(routes.tripsDetails))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(User);

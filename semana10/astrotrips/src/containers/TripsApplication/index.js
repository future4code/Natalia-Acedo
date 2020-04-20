import React from "react";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from "../Router/index";

const TripsApplication = props => {
  return (
    <div>
      <div>Viagens</div>
      <button onClick={props.goFormApplication}>Aplicar a essa viagem</button>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    goFormApplication: () => dispatch(replace(routes.formApplication)),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(TripsApplication);

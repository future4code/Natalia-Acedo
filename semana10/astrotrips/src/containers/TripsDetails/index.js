import React from "react";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from "../Router/index";

const TripsDetails = props => {
  return (
    <div>
      <div>Criar Viagem</div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    
  };
}

export default connect(
  null,
  mapDispatchToProps
)(TripsDetails);

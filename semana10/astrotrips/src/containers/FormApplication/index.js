import React from "react";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";


const FormApplication = props => {
  return (
    <div>
      <div>Formulário de aplicação</div>
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
)(FormApplication);

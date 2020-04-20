import React from "react";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from "../Router/index";

const Login = props => {
  return (
    <div>
      <div>Meu login</div>
      <button onClick={props.goUser}>Tela usuário</button>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    goUser: () => dispatch(replace(routes.user)),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Login);

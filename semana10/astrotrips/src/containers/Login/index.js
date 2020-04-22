import React from "react";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from "../Router/index";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <LoginWrapper>
          <TextField
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            value={email}
          />
          <TextField
            onChange={this.handleFieldChange}
            name="password"
            type="password"
            label="Password"
            value={password}
          />
          <Button>Login</Button>
          </LoginWrapper>
        <div>Meu login</div>
        <button onClick={this.props.goUser}>Tela usuário</button>
      </div>
    );
  }
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

import React, { Component } from "react";
import { connect } from "react-redux";
import { push, replace} from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router/index";

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class Home extends Component {
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
        <Button onClick={this.props.goTripsApplication}>VIAGENS</Button>
        <Button onClick={this.props.goLogin}>ENTRAR</Button>
      </LoginWrapper>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goTripsApplication: () => dispatch(replace(routes.tripsApplication)),
    goLogin: () => dispatch(replace(routes.login))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Home);
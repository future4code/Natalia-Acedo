import React from "react";
import { connect } from "react-redux";
import { replace } from "connected-react-router";
import { routes } from "../Router/index";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { login } from "../../actions/trips"

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  componentDidMount () {
    const isLogged = localStorage.getItem("token")

    if(isLogged !== null){
      this.props.goUser()
    }
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin = event => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <LoginWrapper onSubmit={this.handleLogin}>
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
          <Button type="submit">Login</Button>
          </LoginWrapper>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goUser: () => dispatch(replace(routes.user)),
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Login)

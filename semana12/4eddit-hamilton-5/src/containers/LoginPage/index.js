import React, { Component } from "react";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from "../Router/index";
import { login } from "../../actions/users";
import Header from "../Header";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { MainWrapper, LoginWrapper, ButtonStyled } from "./style";

const loginForm = [
  {
    name: "email",
    type: "email",
    label: "Email ",
  },
  {
    name: "password",
    type: "password",
    label: "Senha ",
  },
];

class LoginPage extends Component {
  state = {
    login: {},
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token !== null) {
      this.props.goToPosts();
    }
  }

  handleInputLogin = (e) => {
    const { name, value } = e.target;

    this.setState({
      login: { ...this.state.login, [name]: value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signin(this.state.login);
  };

  render() {
    return (
      <>
        <Header />
        <MainWrapper>
          <LoginWrapper onSubmit={this.handleSubmit}>
            {loginForm.map((input) => {
              return (
                <div key={input.name}>
                  <TextField
                    label={input.label}
                    required
                    name={input.name}
                    type={input.type}                    
                    value={this.state.login[input.name] || ""}
                    onChange={this.handleInputLogin}
                  />
                </div>
              );
            })}
            <Button color="secondary" variant="contained" type="submit">
              Entrar
            </Button>
            <p>OU</p>
            <ButtonStyled
              color="primary"
              variant="contained"
              onClick={() => this.props.goToSignupScreen()}
            >
              Cadastrar
            </ButtonStyled>
          </LoginWrapper>
        </MainWrapper>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToSignupScreen: () => dispatch(push(routes.signup)),
  signin: (body) => dispatch(login(body)),
  goToPosts: () => dispatch(replace(routes.posts)),
});

export default connect(null, mapDispatchToProps)(LoginPage);

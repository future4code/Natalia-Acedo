import React, { Component } from "react";
import { signUp } from "../../actions/users";
import { connect } from "react-redux";
import { replace } from "connected-react-router";
import { routes } from "../Router/index";
import Header from "../Header";
import TextField from "@material-ui/core/TextField";
import { MainWrapperLogin, LoginWrapper, ButtonStyled } from "./style";

const signupForm = [
  {
    name: "username",
    type: "text",
    label: "Nome de usuário",
    pattern: "[A-Za-zçÇ0-9]{5,}",
    title: "Mínimo 5 caracteres",
  },
  {
    name: "email",
    type: "email",
    label: "Email ",
    title: "Digite um email válido",
  },
  {
    name: "password",
    type: "password",
    label: "Senha ",
    pattern: "[A-Za-zçÇ0-9]{6,}",
    title: "Mínimo 6 caracteres",
  },
];

class Signup extends Component {
  state = {
    form: {},
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token !== null) {
      this.props.goToPosts();
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      form: { ...this.state.form, [name]: value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state.form);
  };

  render() {
    return (
      <>
        <Header />
        <MainWrapperLogin>
          <LoginWrapper onSubmit={this.handleSubmit}>
            {signupForm.map((input) => {
              return (
                <div key={input.name}>
                  <TextField
                    label={input.label}
                    required
                    name={input.name}
                    type={input.type}
                    inputProps={{
                      pattern: input.pattern,
                      title: input.title,
                    }}
                    value={this.state.form[input.name] || ""}
                    onChange={this.handleInputChange}
                  />
                </div>
              );
            })}

            <ButtonStyled color="primary" variant="contained" type="submit">
              Cadastrar
            </ButtonStyled>
          </LoginWrapper>
        </MainWrapperLogin>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUp: (body) => dispatch(signUp(body)),
  goToPosts: () => dispatch(replace(routes.posts)),
});

export default connect(null, mapDispatchToProps)(Signup);

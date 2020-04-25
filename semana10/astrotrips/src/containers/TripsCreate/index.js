import React from "react";
import { connect } from "react-redux";
import { createTripPost } from '../../actions/trips'
import { replace } from "connected-react-router";
import { routes } from "../Router/index";

import Button from "@material-ui/core/Button";
import styled from "styled-components"
import userComputer from "../../img/user-page.jpg"

const ContainerTripsCreate = styled.div`
  margin-left: 10%;
  height: 70vh;
  margin-bottom: 40px;  
`
const Tittle = styled.h1` 
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  font-family: Roboto, sans-serif;
  letter-spacing: 3px;
`

const MainContainer = styled.div` 
  display: flex;
  align-items: center;
`
const FormStyled = styled.form` 
  display: flex;
  flex-direction: column;
  width: 40%;
`
const InputCreate = styled.input` 
	margin: 5px 30px 15px 0;
	border-radius: 5px;
	height: 30px;
`

const SelectCreate = styled.select` 
  margin: 5px 30px 15px 0;
	border-radius: 5px;
	height: 30px;
`

const ContainerImage = styled.div` 
  margin-left: 10%;
`

const ImageUser = styled.img` 
  height: 350px;
  border-radius: 300px;
`
const ButtonStyled = styled(Button) `
  width: 100px;
`

const todayDate = () => {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  if (day < 10 && month < 10) {
    day = '0' + day
    month = '0' + month
    return year + '-' + month + '-' + day;
  }
  else if (month < 10) {
    month = '0' + month
    return year + '-' + month + '-' + day;
  }
  else if (day < 10) {
    day = '0' + day
    return year + '-' + month + '-' + day;
  }
  else {
    return year + '-' + month + '-' + day;
  }
}


const createTrip = [
  { name: "tripName", type: "text", label: "Viagem", pattern: "[A-Za-z ]{5,}", title: "Deve ter pelo menos 5 letras" },
  { name: "planet", type: "text", label: "Planeta", title: "Escolha um planeta" },
  { name: "date", type: "date", label: "Data da viagem", min: todayDate() },
  { name: "description", type: "text", label: "Sobre a viagem", pattern: "[A-Za-z ]{30,}", title: "Deve ter pelo menos 30 letras" },
  { name: "duration", type: "number", label: "Duração da viagem", min: "50", title: "Deve ter pelo menos 50 dias" }
]

class TripsCreate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {}
    }
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token === null) {
      this.props.goLogin();
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ form: { ...this.state.form, [name]: value } })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.createTripPost(this.state.form)
    this.setState({ form: {} });
  }

  renderInputs = () => {
    return createTrip.map(input => {
      if (input.name === "planet") {
        return <>
          <label htmlFor={input.name}> {input.label}: </label>
          <SelectCreate onChange={this.handleInputChange} name={input.name} value={this.state.form[input.name]} required title="Selecione uma opção">
            <option>Selecione uma opção</option>
            <option value="Mercúrio">Mercúrio</option>
            <option value="Vênus">Vênus</option>
            <option value="Terra">Terra</option>
            <option value="Marte">Marte</option>
            <option value="Júpiter">Júpiter</option>
            <option value="Saturno">Saturno</option>
            <option value="Urano">Urano</option>
            <option value="Netuno">Netuno</option>
            <option value="Plutão">Plutão</option>
          </SelectCreate>
        </>
      } else {
        return <>
          <label htmlFor={input.name}> {input.label}: </label>
          <InputCreate
            pattern={input.pattern}
            min={input.min}
            name={input.name}
            type={input.type}
            value={this.state.form[input.name] || ""}
            title={input.title}
            required
            onChange={this.handleInputChange}
          />
        </>
      }
    })
  }


  render() {
    console.log(this.state.form)
    return (
      <ContainerTripsCreate>
        <Tittle>Criar Viagem</Tittle>
        <MainContainer>
          <FormStyled onSubmit={this.handleFormSubmit}>
            {this.renderInputs()}
            <ButtonStyled  color="primary" variant="contained" type="submit">Enviar</ButtonStyled>
          </FormStyled>
          <ContainerImage>
            <ImageUser src={userComputer} />
          </ContainerImage>
        </MainContainer>
      </ContainerTripsCreate>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  goLogin: () => dispatch(replace(routes.login)),
  createTripPost: (form) => dispatch(createTripPost(form))
})


export default connect(
  null,
  mapDispatchToProps
)(TripsCreate);

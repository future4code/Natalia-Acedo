import React from "react";
import { connect } from "react-redux";
import { CountryDropdown } from "react-country-region-selector"

import { applyToTrip, getTrips } from '../../actions/trips'

import imageApply from "../../img/aplly.png"
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Tittle = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  font-family: Roboto, sans-serif; 
  letter-spacing: 3px;
  margin-left: 10%;
`
const MainContainer = styled.div` 
  display: flex;
  height: 70vh;
  align-items: center;
  margin-bottom: 30px;
`

const FormStyled = styled.form` 
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  width: 40%;
`
const InputApply = styled.input` 
	margin: 5px 30px 15px 0;
	border-radius: 5px;
	height: 30px;
`

const SelectApply = styled.select` 
  margin: 5px 30px 15px 0;
	border-radius: 5px;
	height: 30px;
`

const CountryStyled = styled(CountryDropdown)`
  margin: 5px 30px 15px 0;
	border-radius: 5px;
	height: 30px;
`

const ContainerImage = styled.div` 
  margin-left: 10%;
`

const ButtonStyled = styled(Button) `
  width: 100px;
`

const applyToTripInputs = [
  { name: "name", type: "text", label: "Seu nome", pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{3,}", title: "Deve ter pelo menos 3 letras" },
  { name: "age", type: "number", label: "Sua idade", min: "18", max: "150", title: "Apenas maiores de 18 podem aplicar" },
  { name: "applicationText", type: "text", label: "Por que você deveria ser escolhido?", pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ!:.,]{30,}", title: "Deve ter pelo menos 30 letras" },
  { name: "profession", type: "text", label: "Qual sua profissão?", pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{10,}", title: "Deve ter pelo menos 10 letras" }
]

class TripsApplication extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {},
      tripId: null
    }
  }

  componentDidMount() {
    if (this.props.getTrips) {
      this.props.getTrips()
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ form: { ...this.state.form, [name]: value } })
  }

  handleSelectCountry = event => {
    this.setState({ form: { ...this.state.form, country: event } })
  }

  handleSelectTrip = event => {
    this.setState({ tripId: event.target.value })
  }


  renderInputs = () => {
    return applyToTripInputs.map(input => {
      return <>
        <label htmlFor={input.name}> {input.label}: </label>
        <InputApply
          pattern={input.pattern}
          min={input.min}
          max={input.max}
          name={input.name}
          type={input.type}
          value={this.state.form[input.name] || ""}
          title={input.title}
          required
          onChange={this.handleInputChange}
        />
      </>
    })
  }


  renderTripsDetails = () => {
    return this.props.trips && this.props.trips.map(trip => {
      return <option value={trip.id}> {trip.name} - {trip.planet} </option>
    })
  }


  handleFormSubmit = event => {
    event.preventDefault();
    const { form, tripId } = this.state
    this.props.applyToTrip(form, tripId)
    alert("Sua aplicação foi enviada!")
    this.setState({ form: {} });
  }


  render() {
    return (
      <div>
        <Tittle>Aplicar a uma viagem</Tittle>
        <MainContainer>
          <FormStyled onSubmit={this.handleFormSubmit}>
            {this.renderInputs()}
            <label htmlFor="country">Qual é seu país?</label>
            <CountryStyled
              name={"country"}
              value={this.state.form.country || ""}
              title="Escolha um país"
              required
              onChange={this.handleSelectCountry}
            />
            <label htmlFor="trip">Selecione a viagem</label>
            <SelectApply name="trip" onChange={this.handleSelectTrip}>
              {this.renderTripsDetails()}
            </SelectApply>
            <ButtonStyled color="primary" variant="contained" type="submit">Enviar</ButtonStyled>
          </FormStyled>

          <ContainerImage>
            <img src={imageApply} />
          </ContainerImage>
        </MainContainer>
      </div>
    );
  }
};


const mapStateToProps = (state) => ({
  trips: state.tripsData.trips
});

const mapDispatchToProps = dispatch => ({
  applyToTrip: (form, id) => dispatch(applyToTrip(form, id)),
  getTrips: () => dispatch(getTrips())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripsApplication);

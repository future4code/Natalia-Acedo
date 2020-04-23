import React from "react";
import { connect } from "react-redux";
import { CountryDropdown } from "react-country-region-selector"
import {applyToTrip, getTrips} from '../../actions/trips'

const applyToTripInputs = [
  {name: "name", type:"text", label:"Seu nome", pattern:"[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{3,}", title:"Deve ter pelo menos 3 letras"},
  {name:"age", type:"number", label: "Sua idade", min:"18", title:"Apenas maiores de 18 podem aplicar"},  
  {name:"applicationText", type:"text", label: "Por que você deveria ser escolhido?", pattern:"[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ!:.,]{30,}", title:"Deve ter pelo menos 30 letras"},
  {name:"profession", type:"text", label: "Qual sua profissão?", pattern:"[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{10,}", title:"Deve ter pelo menos 10 letras"}
]

class TripsApplication extends React.Component {
  constructor (props) {
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
    const {name, value} = event.target
    this.setState({form: {...this.state.form, [name]: value} })
  }
  
  handleSelectCountry = event => {
    this.setState({form:{...this.state.form, country: event}})
  }

  handleSelectTrip = event => {
    this.setState({tripId: event.target.value})
  }

  
  renderInputs = () => {
    return applyToTripInputs.map(input => {
      return <>
        <label htmlFor={input.name}> {input.label}: </label>
        <input 
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
    })
  }

  
  renderTripsDetails = () => {
   return this.props.trips && this.props.trips.map(trip => {
      return <option value={trip.id}> {trip.name} - {trip.planet} </option>
    })
  }


  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    const {form, tripId} = this.state
    this.props.applyToTrip(form, tripId)
    this.setState({ form: {} });
  }
  

  render () {
    return (
      <div>
        <h1>Viagens</h1>
        <form onSubmit={this.handleFormSubmit}>
          {this.renderInputs()}
          <label htmlFor="country">Qual é seu país?</label>
          <CountryDropdown 
                name={"country"} 
                value={this.state.form.country || ""} 
                title="Escolha um país"
                required
                onChange={this.handleSelectCountry}
            />

          <label htmlFor="trip">Selecione a viagem</label>  
          <select name="trip" onChange={this.handleSelectTrip}>
            {this.renderTripsDetails()}
          </select>
              
          <button type="submit">Enviar</button>
        </form>
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

import React from "react";
import { connect } from "react-redux";
import { CountryDropdown } from "react-country-region-selector"
import {applyToTrip, getTrips} from '../../actions/trips'

const applyToTripInputs = [
  {name: "nameUser", type:"text", label:"Se nome", pattern:"[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{3,}", title:"Deve ter pelo menos 3 letras"},
  {name:"age", type:"number", label: "Sua idade", min:"18", title:"Apenas maiores de 18 podem aplicar"},  
  {name:"applicationText", type:"text", label: "Por que você deveria ser escolhido?", pattern:"[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{3,}", title:"Deve ter pelo menos 30 letras"},
  {name:"profession", type:"text", label: "Qual sua profissão?", pattern:"[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{10,}", title:"Deve ter pelo menos 10 letras"}
]

class TripsApplication extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      form: {}
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
  
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.form);
    this.setState({ form: {} });
  }
  
  renderInputs = () => {
    return applyToTripInputs.map(input => {
    if(input.name === "country") {
      return <div>
        <label htmlFor={input.name}> {input.label}: </label>
      </div>
    } else {
      return <div>
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
      </div>
    }
    })
  }


  render () {
    console.log("Aqui está", this.props.trips)
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
            />
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
  //applyToTrip: () => dispatch(applyToTrip(form, id))   
  getTrips: () => dispatch(getTrips())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripsApplication);

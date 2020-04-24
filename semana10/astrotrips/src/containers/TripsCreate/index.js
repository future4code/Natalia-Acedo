import React from "react";
import { connect } from "react-redux";
import { createTripPost } from '../../actions/trips'

const todayDate = () => {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth()+1;
  let year = today.getFullYear();
       if(day<10 && month<10){
              day='0'+day
              month='0'+month
              return year+'-'+month+'-'+day;
          } 
      else if(month<10){
          month='0'+month
          return year+'-'+month+'-'+day;
      }
      else if(day<10){
          day='0'+day
          return year+'-'+month+'-'+day;
      }
      else {
        return year+'-'+month+'-'+day;
      }
}


const createTrip = [
  {name: "tripName", type:"text", label:"Viagem", pattern:"[A-Za-z ]{5,}", title:"Deve ter pelo menos 5 letras"},
  {name: "planet", type:"text", label:"Planeta", title:"Escolha um planeta"},
  {name:"date", type: "date", label:"Data da viagem", min: todayDate()},
  {name:"description", type: "text", label:"Sobre a viagem", pattern: "[A-Za-z ]{30,}", title:"Deve ter pelo menos 30 letras"},
  {name:"duration", type: "number", label:"Duração da viagem", min:"50", title:"Deve ter pelo menos 50 dias"}
]

class TripsCreate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      form: {}
    }
  }
  
  handleInputChange = event => {
    const {name, value} = event.target
    this.setState({form: {...this.state.form, [name]: value} })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.form);
    this.props.createTripPost(this.state.form)
    this.setState({ form: {} });
  }

  renderInputs = () => {
    return createTrip.map(input => {
    if(input.name === "planet") {
      return <div>
        <label htmlFor={input.name}> {input.label}: </label>
        <select onChange={this.handleInputChange} name={input.name} value={this.state.form[input.name]}> 
          <option value="mercury">Mercúrio</option>
          <option value="venus">Vênus</option>
          <option value="earth">Terra</option>
          <option value="mars">Marte</option>
          <option value="jupiter">Júpiter</option>
          <option value="saturn">Saturno</option>
          <option value="uranus">Urano</option>
          <option value="neptune">Netuno</option>
          <option value="pluto">Plutão</option>
        </select>
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
    console.log(this.state.form)
    return (
      <div>
        <h1>Criar Viagem</h1>
        <form onSubmit={this.handleFormSubmit}>
          {this.renderInputs()}
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  createTripPost: (form) => dispatch(createTripPost(form))
})


export default connect(
  null,
  mapDispatchToProps
)(TripsCreate);

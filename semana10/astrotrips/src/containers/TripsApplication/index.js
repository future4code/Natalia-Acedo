import React from "react";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from "../Router/index";


const aplyToTrip = [
  {name: "nameUser", type:"text", label:"Se nome", pattern:"[A-Za-z ]{3,}", title:"Deve ter pelo menos 3 letras"},
  {name:"age", type:"number", label: "Sua idade", min:"18", title:"Apenas maiores de 18 podem aplicar"},  
  {name:"applicationText", type:"text", label: "Por que você deveria ser escolhido?", pattern:"[A-Za-z ]{3,}", title:"Deve ter pelo menos 30 letras"},
  {name:"profession", type:"text", label: "Qual sua profissão?", pattern:"[A-Za-z ]{10,}", title:"Deve ter pelo menos 10 letras"},
  {name:"country", type:"text", label: "Qual seu país?", pattern:"", title:"Escolha um país"},
]

class TripsApplication extends React.Component {
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
    this.setState({ form: {} });
  }
  
  renderInputs = () => {
    return aplyToTrip.map(input => {
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
    return (
      <div>
        <h1>Viagens</h1>
        <form onSubmit={this.handleFormSubmit}>
          {this.renderInputs()}
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return {
    
  };
}

export default connect(
  null,
  mapDispatchToProps
)(TripsApplication);

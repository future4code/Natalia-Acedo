import React from 'react';
import logo from './logo.svg';
import './App.css';
import EtapaDois from './components/EstapaDois/EstapaDois';
import EtapaTres from './components/EstapaTres/EtapaTres';


class App extends React.Component {
  constructor(props) {
    super (props)
    
    this.state = {
      proximaEtapa: true,
    }
  }

  onClickProximaEtapa = () => {
    this.setState({proximaEtapa: !this.state.proximaEtapa})
  }
  

  render () {
    return (
      <div className="App">
        <h1>ETAPA 1 - DADOS GERAIS</h1> 
        <p>1. Qual o seu nome?</p>
        <input
        placeholder = "nome"
        ></input>
        <p>2. Qual sua idade?</p>
        <input
        placeholder = "idade"
        ></input>
        <p>3. Qual sua email?</p>
        <input
        placeholder = "idade"
        ></input>
        <p>4. Qual a sua escolaridade?</p>
        <select>
          <option value="Ensino médio incompleto">Ensino médio incompleto</option>
          <option value="Ensino médio completo">Ensino médio completo</option>
          <option value="Ensino superior incompleto">Ensino superior incompleto</option>
          <option value="Ensino superior completo">Ensino superior completo</option>
        </select>
        <br></br>
        <button onClick = {this.onClickProximaEtapa}>Próxima etapa</button>
        {this.state.proximaEtapa ? <EtapaDois></EtapaDois> : <EtapaTres></EtapaTres>}
      </div>  
    )
  }
}
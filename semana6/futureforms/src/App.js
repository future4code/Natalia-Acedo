import React from 'react';
import './App.css';
import EtapaUm from "./components/EtapaUm/EtapaUm"
import EtapaDois from "./components/EtapaDois/EtapaDois"
import EtapaTres from "./components/EtapaTres/EtapaTres"
import EtapaFinal from "./components/EtapaFinal/EtapaFinal"



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      qualEtapa: 1,
    }
  }


  selecionarEtapa = () => {
    let etapa 
    switch (this.state.qualEtapa) {
      case 1: 
      etapa = <EtapaUm></EtapaUm>
      break;

      case 2: 
      etapa = <EtapaDois></EtapaDois>
      break;

      case 3:
        etapa = <EtapaTres></EtapaTres>
        break;
      
       case 4:
        etapa = <EtapaFinal></EtapaFinal>
        break;
    }
    return etapa
  }

  onClickProximaEtapa = () => {
    this.setState({qualEtapa: this.state.qualEtapa + 1 })
  }

  render() {
    return (
      <div className="App">
        {this.selecionarEtapa ()}

      {this.state.qualEtapa < 4 && <button onClick={this.onClickProximaEtapa}>Próxima etapa</button>}
      </div>
    )
  }
}

export default App;
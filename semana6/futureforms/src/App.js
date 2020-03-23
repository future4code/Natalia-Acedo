import React from 'react';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      etapaDois: true,
      etapaTres: true
    }
  }

  onClickEtapaDois = () => {
    this.setState({ etapaDois: !this.state.etapaDois })
  }

  onClickEtapaTres = () => {
    this.setState({ etapaTres: !this.state.etapaTres })
  }


  render() {
    return (
      <div className="App">
        {this.state.etapaDois ?
          <>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <p>1. Qual o seu nome?</p>
            <input
              placeholder="nome"
            ></input>
            <p>2. Qual sua idade?</p>
            <input
              placeholder="idade"
            ></input>
            <p>3. Qual sua email?</p>
            <input
              placeholder="idade"
            ></input>
            <p>4. Qual a sua escolaridade?</p>
            <select>
              <option value="Ensino médio incompleto">Ensino médio incompleto</option>
              <option value="Ensino médio completo">Ensino médio completo</option>
              <option value="Ensino superior incompleto">Ensino superior incompleto</option>
              <option value="Ensino superior completo">Ensino superior completo</option>
            </select>
            <br></br>
            <button onClick={this.onClickEtapaDois}>Próxima etapa</button>
          </>
          :
          <>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR </h1>
            <p>1. Qual o curso? </p>
            <input>
            </input>
            <p>2. Qual a unidade de ensino?</p>
            <input>
            </input>
            <br></br>
            <button onClick={this.onClickEtapaTres}>Próxima etapa</button>
          </>
        } {this.state.etapaTres ? 
          <>
          <h1>ETAPA 3: Informações sobre quem não se formou no ensino superior nem está cursando </h1>
          <p>1. Por que você não terminou um curso de graduação?</p>
          <input>
          </input>
          <p>2. Você fez algum curso complementar?</p>
          <select>
              <option value="Nenhum">Nenhum</option>
              <option value="Curso técnico">Curso técnico</option>
              <option value="Curso de inglês">Curso de inglês</option>
          </select>
          <br></br>
          <button>Próxima etapa</button> 
          </>
          : 
          <>
          <h1>O FORMULÁRIO ACABOU</h1>
          <p>Muito obrigado por participar! Entraremos em contato!</p>
          </>
          }
      </div>
    )
  }
}

export default App;
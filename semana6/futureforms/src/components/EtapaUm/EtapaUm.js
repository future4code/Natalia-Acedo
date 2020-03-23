import React from 'react'

function EtapaUm (props) {
    return (
        <div>
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
        </div>
    )
}

export default EtapaUm

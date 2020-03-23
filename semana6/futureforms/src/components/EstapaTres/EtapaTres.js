import React from 'react'

function EtapaTres(props) {
    return (
        <div>
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
        </div>
    )
}

export default EtapaTres

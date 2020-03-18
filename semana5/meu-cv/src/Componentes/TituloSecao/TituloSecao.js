import React from 'react'
import './TituloSecao.css'

function TituloSecao (props) {
    return (
        <div className="titulo-secao">
            <h1> {props.tituloSecao} </h1>
        </div>
    )
}

export default TituloSecao
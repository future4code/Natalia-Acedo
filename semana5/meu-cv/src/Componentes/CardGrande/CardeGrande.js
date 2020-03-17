import React from 'react'
import './CardeGrande.css'

function CardeGrande(props) {
    return (
        <div className="card-grande">
            <div className="container-card-grande">
                <img className="img-card-grande" src={props.imagemCardGrande} />
                <div className="card-grande-texto">
                    <h2>{props.tituloCardGrande}</h2>
                    <p> {props.textoCardGrande} </p>
                </div>
            </div>
        </div>
    )
}

export default CardeGrande
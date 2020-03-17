import React from 'react'
import './CardPequeno.css'

function CardPequeno (props) {
    return (
        <div className="card-pequeno">
            <div className="container-card-pequeno">
                <img className="img-card-pequeno" src={props.imagemCardPequeno}/>
                <p><b> {props.textoNegrito} </b> {props.textoCardPequeno} </p>
            </div>
        </div>
    )
}

export default CardPequeno
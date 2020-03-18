import React from 'react'
import './BotaoComImagem.css'

function BotaoComImagem (props) {
    return (
        <div className="div-botao" >
            <button>
                <img className="botao-imagem" src={props.imagemBotao}/>
                <p>{props.textoBotao}</p>
            </button>
        </div>

    )
}

export default BotaoComImagem
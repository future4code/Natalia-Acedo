import React from 'react'

const ToolBar = () => {
    return (
        <div>
          <button>Marcar todas como completas</button>
          <p>Filtros:</p>
          <button>Todas</button>
          <button>Pendentes</button>
          <button>Completas</button>
          <button>Remover completas</button>
        </div>
    )
}

export default ToolBar
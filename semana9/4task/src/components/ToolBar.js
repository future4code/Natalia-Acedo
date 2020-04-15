import React from 'react'
import { connect } from 'react-redux'
import { completeAllTasks, deleteAllComplete, setFilter } from '../actions/actionsTask'

const ToolBar = (props) => {
    return (
        <div>
          <button onClick={props.completeAllTasks}>Marcar todas como completas</button>
          <p>Filtros:</p>
          <button onClick={() => props.setFilter("todas")}>Todas</button>
          <button onClick={() => props.setFilter("pendentes")}>Pendentes</button>
          <button onClick={() => props.setFilter("completas")}>Completas</button>
          <button onClick={props.deleteAllComplete}>Remover completas</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    completeAllTasks: () => dispatch(completeAllTasks()),
    deleteAllComplete: () => dispatch(deleteAllComplete()),
    setFilter: (filter) => dispatch(setFilter(filter))
  }
}

export default connect(null, mapDispatchToProps)(ToolBar)
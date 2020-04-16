import React from 'react'
import { connect } from 'react-redux'
import { createTask } from '../actions/actionsTask'

class TaskForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputText: ""
        }
    }

    onChangeInput = (event) => {
        this.setState({inputText: event.target.value})
    }

    onClickAddTask = () => {
        this.props.createTask(this.state.inputText)
        this.setState({inputText: ""})
    }

    render() {
        return (
            <form>
                <input
                    value={this.state.inputText}
                    onChange={this.onChangeInput}
                    placeholder="O que tem que ser feito?" />
                <button type="button" onClick={this.onClickAddTask}>Adicionar tarefa</button>
            </form>
    )}
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTask: (taskText) => {
            dispatch(createTask(taskText))
        }
    }
}

export default connect(null, mapDispatchToProps) (TaskForm)
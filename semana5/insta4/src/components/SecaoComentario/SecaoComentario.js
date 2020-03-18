import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	constructor(props) {
		super(props)
		

		this.state = {
			comentario: "",
		}
	}

	onChangeComentario = (event) => {
		this.setState ({
			comentario: event.target.value
		})
		console.log(this.state.comentario)
	}


	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.comentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}

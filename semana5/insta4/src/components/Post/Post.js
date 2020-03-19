import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSalvarBranco from '../../img/star_border-24px.svg'
import iconeSalvarPreto from '../../img/grade-24px.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      curtido: false,
      numeroCurtidas: 0,
      comentando: false,
      numeroComentarios: 0,
      salvo: false
    }
  }

  onClickSalvar = () => {
    if(this.state.curtido === false){
      this.setState({
        salvo: true,
      })  
    } else {
      this.setState({
        salvo: false,
      })
    }
  }

  
  onClickCurtida = () => {
    if(this.state.curtido === false){
      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })  
    } else {
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeSalvar

    if(this.state.salvo) {
      iconeSalvar = iconeSalvarPreto
    } else {
      iconeSalvar = iconeSalvarBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={iconeSalvar}
          onClickIcone={this.onClickSalvar}
        />

      </div>
      {componenteComentario}
    </div>
  }
}

export default Post
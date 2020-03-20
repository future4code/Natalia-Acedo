import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: [
        {
          nomeUsuario: "Paula",
          fotoUsuario: 'https://picsum.photos/50/50',
          fotoPost: "https://picsum.photos/200/150"
        },
        {
          nomeUsuario: 'Natália',
          fotoUsuario: 'https://picsum.photos/50/300',
          fotoPost: 'https://picsum.photos/300/150'
        },
        {
          nomeUsuario: 'Lucas',
          fotoUsuario: 'https://picsum.photos/50/200',
          fotoPost: 'https://picsum.photos/250/150'
        }
      ],
      valorInputNome: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    }
  }

  adicionaPost = () => {
    const novoPost ={
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novoPostCopia = [...this.state.posts, novoPost]

    this.setState({
      posts: novoPostCopia,
      valorInputNome: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    })
  }

  onChangeInputNome = event => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputFotoUsuario = event => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = event => {
    this.setState({ valorInputFotoPost: event.target.value });
  };


  render() {
    const feedPost = this.state.posts.map((post, index) => {
      return (
        <div className={'app-container'}>
          <Post
            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}
            key={index}
          />
        </div>
        )
      })
      return (
        <div className={'app-container'}>
          <input 
          value={this.state.valorInputNome} 
          onChange={this.onChangeInputNome}
          placeholder="Nome"
          />

          <input 
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder="Foto do usuário"
          />

          <input 
          value={this.state.valorInputFotoPost} 
          onChange={this.onChangeInputFotoPost}
          placeholder="Foto do post"
          />
          <button onClick={this.adicionaPost}>Enviar post</button>
          <div> {feedPost} </div>
        </div>
      )
  }
}

    /* render() {
    return (
      this.state.posts.map((post, index) => {
        return (
          <div className={'app-container'}>
            <Post
              nomeUsuario={post.nomeUsuario}
              fotoUsuario={post.fotoUsuario}
              fotoPost={post.fotoPost}
              key={index}
            />
          </div>
        )
      })
    )
  }
} */

export default App;

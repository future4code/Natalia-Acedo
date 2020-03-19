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

    render() {
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
}

export default App;

import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'natália'}
          fotoUsuario={'https://picsum.photos/50/300'}
          fotoPost={'https://picsum.photos/300/150'}
        />
        <Post
          nomeUsuario={'lucas'}
          fotoUsuario={'https://picsum.photos/50/200'}
          fotoPost={'https://picsum.photos/250/150'}
        />
      </div>
    );
  }
}

export default App;

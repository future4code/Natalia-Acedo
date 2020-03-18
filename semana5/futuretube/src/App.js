import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="div-mae">
      <header>
        <a className="header-link" href="futuretube.html">
            <img className="img-home" src={require("../src/img/future4.png")} alt="Logo do FutureTube, ao clicar retorna para a home"></img>
            FutureTube
        </a>
        <label>Pesquise o vídeo:</label>
        <input type="text"/>
      </header>
      <section className="video-section">
        <article className="media1">
            <img className="img-video" src={require("../src/img/ireland.jpeg")}/>
            <p>Media 1</p>
        </article>
        <article className="media2">
            <img className="img-video" src={require("../src/img/blood.jpeg")}/>
            <p>Media 2</p>
        </article>
        <article className="media3">
            <img className="img-video" src={require("../src/img/via-lactea.jpg")}/>
            <p>Media 3</p>
        </article>
        <article className="media4">
            <img className="img-video" src={require("../src/img/ocean.jpg")}/>
            <p>Media 4</p>
        </article>
        <article className="media5">
            <img className="img-video" src={require("../src/img/autism.jpg")}/>
            <p>Media 5</p>
        </article>
        <article className="media6">
            <img className="img-video" src={require("../src/img/boy.jpg")}/>
            <p>Media 6</p>
        </article>
        <article className="media7">
            <img className="img-video" src={require("../src/img/travel.jpg")}/>
            <p>Media 7</p>
        </article>
        <article className="media8">
            <img className="img-video" src={require("../src/img/tree.jpg")}/>
            <p>Media 8</p>
        </article>
      </section>
      <footer>
        2020 | Vídeos autorais do FutureTube
      </footer>   
    </div>

  );
}

export default App;

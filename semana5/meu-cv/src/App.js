import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardeGrande from './Componentes/CardGrande/CardeGrande';
import CardPequeno from './Componentes/CardPequeno/CardPequeno';
import TituloSecao from './Componentes/TituloSecao/TituloSecao';
import BotaoComImagem from './Componentes/BotaoComImagem/BotaoComImagem';

function App() {
  return (
    <div>
      <TituloSecao tituloSecao={"Dados Pessoais"} />
      <CardeGrande imagemCardGrande={require("./img/natalia.jpg")} tituloCardGrande={"Natália Acedo"} textoCardGrande={
      "Oi, eu sou a Natália Acedo. Me formei em Psicologia em 2015 e atuei nessa área até o começo deste ano. Estou em processo de mudança de área, desde a metade do ano passado tenho estudado front-end. Fui aluna da turma online da {Reprograma} e agora faço parte da Future4."} />
      <CardPequeno imagemCardPequeno={require("./img/send.png")} textoNegrito={"Email: "} textoCardPequeno={"n.alves.acedo@gmail.com"} />
      <CardPequeno imagemCardPequeno={require("./img/home-run.png")} textoNegrito={"Endereço: "} textoCardPequeno={"Rua do Futuro, 4"} />
      <BotaoComImagem imagemBotao={require("./img/down-arrow.png")}  textoBotao={"Ver mais"} />

      <TituloSecao tituloSecao={"Experiências profissionais"} />
      <CardeGrande imagemCardGrande={require("./img/reprograma.png")} tituloCardGrande={"{Reprograma}"} textoCardGrande={
      "Outubro 2019 - Dezembro (2020)"} />
      <CardeGrande imagemCardGrande={require("./img/future4.png")} tituloCardGrande={"Future 4"} textoCardGrande={
      "Estudante do curso Web Full Stack"} />

      <TituloSecao tituloSecao={"Minhas redes sociais"} />
      <BotaoComImagem imagemBotao={require("./img/linkedin.png")} textoBotao={"LinkeIn"} />
    </div>
  );
}
export default App;
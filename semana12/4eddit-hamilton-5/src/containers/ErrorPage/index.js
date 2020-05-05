import React from "react"
import NotFound from "../../img/ghost.png"
import Header from "../Header";
import { WrapperErrorPage, ImageNotFound } from "./style";

class ErrorPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <WrapperErrorPage>
          <h1>Página não encontrada</h1>
          <ImageNotFound src={NotFound}></ImageNotFound>
        </WrapperErrorPage>
      </>
    );
  }
}

export default ErrorPage;

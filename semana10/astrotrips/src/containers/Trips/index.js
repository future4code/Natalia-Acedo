import React from "react";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from "../Router/index";
import {getTrips, getTripDetails} from '../../actions/trips'

import defaultImage from "../../img/planets/default.png"
import mercury from "../../img/planets/mercury.png"
import venus from "../../img/planets/venus.png"
import earth from "../../img/planets/earth.png"
import mars from "../../img/planets/mars.png"
import jupiter from "../../img/planets/jupiter.png"
import saturn from "../../img/planets/saturn.png"
import uranus from "../../img/planets/uranus.png"
import neptune from "../../img/planets/neptune.png"
import pluto from "../../img/planets/pluto.png"
import Button from "@material-ui/core/Button";

import styled from "styled-components";

const ContainerTrips = styled.div` 
  margin: 5% 10%;
`
const Tittle = styled.h1` 
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  font-family: Roboto, sans-serif;
  letter-spacing: 3px;
`

const ContainerAllCards = styled.div` 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
`

const ContainerCard = styled.div` 
  border-radius: 30px;
  padding: 15px;
  background-color:  #d7d7dd;
  padding: 30px;
`
const ContainerText = styled.div`
  height:90%;
  margin-bottom: 15px;
`

const ImagePlanet = styled.img`
  height: 150px;
`

class Trips extends React.Component {


  componentDidMount() {
		if (this.props.getTrips) {
			this.props.getTrips()
    }

    const token = localStorage.getItem("token");
    if (token === null) {
      this.props.goLogin();
    }
  }

  
  handleTripDetails = (id) => {
    this.props.getTripDetails(id)
    this.props.goTripDetails()
  }

  renderPlanetImages = (planet) => {
    switch (planet) {
      case "Mercúrio":
        return <ImagePlanet src={mercury}/>
      case "Vênus":
        return <ImagePlanet src={venus}/>
      case "Terra":
        return <ImagePlanet src={earth}/>
      case "Marte":
        return <ImagePlanet src={mars}/>
      case "Júpiter":
        return <ImagePlanet src={jupiter}/>
      case "Jupiter":
        return <ImagePlanet src={jupiter}/>
      case "Saturno":
        return <ImagePlanet src={saturn}/>
      case "Urano":
        return <ImagePlanet src={uranus}/>
      case "Netuno":
        return <ImagePlanet src={neptune}/>
      case "Plutão":
        return <ImagePlanet src={pluto}/>
      default:
        return <ImagePlanet src={defaultImage}/>
    }
  }
    
  renderTrips = () => {

    return this.props.trips && this.props.trips.map(trip => {
      return <ContainerCard>
        <ContainerText>
          {this.renderPlanetImages(trip.planet)}
          <p><strong>{trip.name}</strong></p>
          <p><strong>Destino: </strong>{trip.planet}</p>
          <p><strong>Data: </strong>{trip.date}</p>
          <p><strong>Duração: </strong>{trip.durationInDays}</p>
          <p>{trip.description}</p>
        </ContainerText>
        <Button color="primary" variant="contained" type="submit" onClick={()=> this.handleTripDetails(trip.id)}>Ver candidatos</Button>
      </ContainerCard>
    })
  }


  render () {
    return (
      <ContainerTrips>
        <Tittle>Todas viagens</Tittle>
        <ContainerAllCards>
          {this.renderTrips()}
        </ContainerAllCards>
      </ContainerTrips>
    );
  }
}

const mapStateToProps = (state) => ({
  trips: state.tripsData.trips
});

const mapDispatchToProps = dispatch => ({
  goLogin: () => dispatch(replace(routes.login)),
  getTrips: () => dispatch(getTrips()),
  goTripDetails: () => dispatch(push(routes.tripsDetails)),
  getTripDetails: (id) => dispatch(getTripDetails(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trips);
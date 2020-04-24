import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { push, replace } from "connected-react-router";
import { routes } from "../Router/index";
import {getTrips, getTripDetails} from '../../actions/trips'

const ContainerTrips = styled.div` 
  width: 50%;
  border: 1px black solid;
`

class Trips extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {

    }
  }

  componentDidMount() {
		if (this.props.getTrips && this.props.trips === null) {
			this.props.getTrips()
    }
  }

  
  handleTripDetails = (id) => {
    this.props.getTripDetails(id)
    this.props.goTripDetails()
  }

  renderTrips = () => {
    return this.props.trips && this.props.trips.map(trip => {
      return <ContainerTrips>
        <p><strong>{trip.name}</strong></p>
        <p><strong>Destino: </strong>{trip.planet}</p>
        <p><strong>Data: </strong>{trip.date}</p>
        <p><strong>Duração: </strong>{trip.durationInDays}</p>
        <p>{trip.description}</p>
        <button onClick={()=> this.handleTripDetails(trip.id)}>Ver candidatos</button>
      </ContainerTrips>
    })
  }


  render () {
    return (
      <div>
        <h1>Todas viagens</h1>
        {this.renderTrips()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  trips: state.tripsData.trips
});

const mapDispatchToProps = dispatch => ({
  getTrips: () => dispatch(getTrips()),
  goTripDetails: () => dispatch(push(routes.tripsDetails)),
  getTripDetails: (id) => dispatch(getTripDetails(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trips);
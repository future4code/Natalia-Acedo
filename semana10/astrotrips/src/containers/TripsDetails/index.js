import React from "react";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from "../Router/index";
import {getTrips} from '../../actions/trips'

class TripsDetails extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {

    }
  }

  componentDidMount() {
		if (this.props.getTrips) {
			this.props.getTrips()
    }
	}

  renderTrips = () => {
    return this.props.trips && this.props.trips.map(trip => {
      return console.log("Aqui", trip)
    })
  }


  render () {
    console.log("minha props", this.props.trips)
    return (
      <div>
        <h1>Detalhes da viagem</h1>
        {this.renderTrips()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  trips: state.tripsData.trips
});

const mapDispatchToProps = dispatch => ({
  getTrips: () => dispatch(getTrips())
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripsDetails);

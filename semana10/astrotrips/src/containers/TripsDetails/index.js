import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { push, replace } from "connected-react-router";
import { routes } from "../Router/index";
import { decideCandidate } from '../../actions/trips'

const ContainerTrips = styled.div` 
  width: 50%;
  border: 1px black solid;
`

class TripsDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    componentDidMount() {
        if(this.props.tripDetails === null) {
            this.props.goTrip()
        }
    }


    renderTripDetails = () => {

       const {tripDetails, decideCandidate} = this.props

        return tripDetails && 
        <>
            <h3>Viagem</h3>
            <p><strong>Nome da viagem: </strong>{tripDetails.name}</p>
            <p><strong>Planeta: </strong>{tripDetails.planet}</p>
            <h3><strong>Candidatos </strong> </h3> 
                {tripDetails.candidates.map(candidate => {
                return <ContainerTrips>
                    <p><strong>Nome:</strong>{candidate.name}</p>
                    <p><strong>Idade: </strong>{candidate.age}</p>
                    <p><strong>País: </strong>{candidate.country}</p>
                    <p><strong>Profissão: </strong>{candidate.profession}</p>
                    <p><strong>Texto de aplicação:</strong>{candidate.applicationText}</p>
                    <button onClick={() => decideCandidate(candidate.id, tripDetails.id)}>Aprovar Candidato</button>
                </ContainerTrips>
                })}
        </>
    }

    render() {
        return (
            <div>
                <h1>Detalhes da viagem</h1>
                {this.renderTripDetails()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    tripDetails: state.tripsData.tripDetails
})

const mapDispatchToProps = dispatch => ({
    goTrip: () => dispatch(replace(routes.trips)),
    decideCandidate: (candidateId, tripId) => dispatch(decideCandidate(candidateId, tripId))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TripsDetails);

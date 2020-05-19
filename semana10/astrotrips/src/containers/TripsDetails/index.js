import React from "react";
import { connect } from "react-redux";
import { replace } from "connected-react-router";
import { routes } from "../Router/index";
import { decideCandidate } from '../../actions/trips'

import astronautIcon from "../../img/icons/astronaut.png"
import checkIcon from "../../img/icons/check.png"
import planetIcon from "../../img/icons/planet.png"
import rocketIcon from "../../img/icons/rocket.png"
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const ContainerTripDetails = styled.div` 
    margin-left: 10%;
`
const Tittle = styled.h1` 
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  font-family: Roboto, sans-serif;
  letter-spacing: 3px;
`

const ContainerTripName = styled.div` 
    display: flex;
`
const Icon = styled.img` 
    height: 50px;
    margin-right: 15px;
    margin-left: ${
	props => props.mleft
	};
`

const MainContainer = styled.div`
    display: flex;
    margin-top: 50px;
` 

const ContainerCandidates = styled.div`
    margin:1px black solid;
    width: 80%;
`
const ContainerSecondTittle = styled.div`
    display: flex;
`

const SecondTittle = styled.h3` 
    color: #FF5F00;
`

const ContainerTrips = styled.div` 
  width: 50%;
  border-bottom: 1px black dotted;
  padding-bottom: 15px;
`

class TripsDetails extends React.Component {

    componentDidMount() {
        if(this.props.tripDetails === null) {
            this.props.goTrip()
        }

        const token = localStorage.getItem("token");
        if (token === null) {
          this.props.goLogin();
        }
    }


    renderTripDetails = () => {

       const {tripDetails, decideCandidate} = this.props
        return tripDetails && 
        <>
            <ContainerTripName>
                <Icon src={rocketIcon}/>
                <p><strong>Nome da viagem: </strong>{tripDetails.name}</p>
                <Icon mleft={"35px"} src={planetIcon}/>
                <p><strong>Planeta: </strong>{tripDetails.planet}</p>
            </ContainerTripName>

            <MainContainer>
                <ContainerCandidates>
                    <ContainerSecondTittle>
                        <Icon src={astronautIcon}/>
                        <SecondTittle>Candidatos: { tripDetails.candidates.length} </SecondTittle> 
                    </ContainerSecondTittle>
                    {tripDetails.candidates.map(candidate => {
                        return <>
                            <ContainerTrips>
                                <p><strong>Nome: </strong>{candidate.name}</p>
                                <p><strong>Idade: </strong>{candidate.age}</p>
                                <p><strong>País: </strong>{candidate.country}</p>
                                <p><strong>Profissão: </strong>{candidate.profession}</p>
                                <p><strong>Texto de aplicação:</strong>{candidate.applicationText}</p>
                                <Button color="primary" variant="contained" type="submit" onClick={() => decideCandidate(candidate.id, tripDetails.id)}>Aprovar Candidato</Button>
                            </ContainerTrips>
                        </>
                    })}
                </ContainerCandidates>

                <ContainerCandidates>
                    <ContainerSecondTittle>
                        <Icon src={checkIcon}/>
                        <SecondTittle>Aprovados: { tripDetails.approved.length} </SecondTittle> 
                    </ContainerSecondTittle>
                    {this.props.tripDetails.approved.map(approved => {
                        return <>
                            <ContainerTrips>
                                <p><strong>Nome:</strong>{approved.name}</p>
                                <p><strong>Idade: </strong>{approved.age}</p>
                            </ContainerTrips>
                        </>
                    })}
                </ContainerCandidates>
            </MainContainer>
        </>
    }

    render() {
        return (
            <ContainerTripDetails>
                <Tittle>Detalhes da viagem</Tittle>
                {this.renderTripDetails()}
            </ContainerTripDetails>
        );
    }
}

const mapStateToProps = (state) => ({
    tripDetails: state.tripsData.tripDetails
})

const mapDispatchToProps = dispatch => ({
    goLogin: () => dispatch(replace(routes.login)),
    goTrip: () => dispatch(replace(routes.trips)),
    decideCandidate: (candidateId, tripId) => dispatch(decideCandidate(candidateId, tripId))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TripsDetails);

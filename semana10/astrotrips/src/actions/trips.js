import axios from "axios"
import { push,replace } from "connected-react-router";
import { routes } from "../containers/Router/index";
import moment from 'moment'

export const setTrips = (trip) => {
    return {
        type: "SET_TRIPS",
        payload: {
            trip
        }
    }
}

export const setTripsDetails = (tripDetails) => {
    return {
        type: "SET_TRIP_DETAILS",
        payload: {
            tripDetails
        }
    }
}


export const getTrips = () => async (dispatch) => {
    try {
        const response = await axios.get(
            "https://us-central1-missao-newton.cloudfunctions.net/futureX/natalia-acedo/trips"
        )
        dispatch(setTrips(response.data.trips))
    } catch (error) {
        console.error(error)
    } 
}


export const applyToTrip = (form, id) => async () => {
    try {
        await axios.post(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/natalia-acedo/trips/${id}/apply`,
        form
        )
        alert("Aplicação enviada!")
    } catch (error) {
        console.error(error)
    }
}


export const login = (email, password) => async (dispatch) => {
    const body = {
        email,
        password
    }

    try {
        const response = await axios.post(
            "https://us-central1-missao-newton.cloudfunctions.net/futureX/natalia-acedo/login",
            body
        )
        localStorage.setItem("token", response.data.token)
        dispatch(push(routes.user))
    } catch (error) {
        console.error(error)
        alert("Dados incorretos")
    }
}

const token = localStorage.getItem("token");

export const getTripDetails = (id) => async (dispatch) => {
    try {
        const response = await axios.get(
            `https://us-central1-missao-newton.cloudfunctions.net/futureX/natalia-acedo/trip/${id}`,
            {
                headers: {
                    auth: token
                }
            }
        )
        dispatch(setTripsDetails(response.data.trip))
    } catch (error) {
        console.error(error)
    }
}

export const decideCandidate = (candidateId, tripId) => async (dispatch) => {
    const body = {
        approve: true
    }

    try {
        await axios.put(
            `https://us-central1-missao-newton.cloudfunctions.net/futureX/natalia-acedo/trips/${tripId}/candidates/${candidateId}/decide`,
            body,
            {
                headers: {
                    auth: token
                }
            }
        )
        alert("Candidato aprovado")
    } catch (error) {
        console.error(error)
    }
} 

export const createTripPost = (form) => async () => {
    const dateFormat = moment(form.date).format('DD/MM/YYYY')
    const  body = {
        name: form.tripName,
        planet: form.planet,
        date: dateFormat,
        description: form.description,
        durationInDays: Number(form.duration)
    }

    try{
        await axios.post(
            `https://us-central1-missao-newton.cloudfunctions.net/futureX/natalia-acedo/trips`,
        body,
        {   
            headers: {
                auth: token
            }
        })
        alert("Viagem criada!")
    } catch (error) {
        console.error(error)
    }  
}

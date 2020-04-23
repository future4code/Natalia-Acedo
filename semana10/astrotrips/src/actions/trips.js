import axios from "axios"
import { push } from "connected-react-router";
import { routes } from "../containers/Router/index";

export const setTrips = (trip) => {
    return{
        type: "SET_TRIPS",
        payload: {
            trip
        }
    }
} 

export const getTrips = () => async (dispatch) => {
    const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/futureX/natalia-acedo/trips")
    dispatch(setTrips(response.data.trips))
}


export const applyToTrip = (form, id) => async (dispatch) => {
    await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureX/natalia-acedo/trips/${id}/apply`, form)
}


export const login = (email, password) => async (dispatch) => {
    const body = {
        email,
        password
    }

    try {
        const response =  await axios.post("https://us-central1-missao-newton.cloudfunctions.net/futureX/natalia-acedo/login", body)
        localStorage.setItem("token", response.data.token)
        dispatch(push(routes.user))  
    } catch (error) {
        console.error(error)
    }
}
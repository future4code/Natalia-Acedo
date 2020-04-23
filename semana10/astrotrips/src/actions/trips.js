import axios from "axios"

export const setTrips = (trip) => {
    return{
        type: "SET_TRIPS",
        payload: {
            trip
        }
    }
} 

export const getTrips = () => async (dispatch) => {
    const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/futureX/natalia/trips")
    dispatch(setTrips(response.data.trips))
}



export const applyToTrip = (form, id) => async (dispatch) => {
    await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureX/natalia/trips/${id}/apply`, form)
}
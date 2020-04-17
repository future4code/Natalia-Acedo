import axios from "axios"

export const clearSwipes = () => async (dispatch) => {
	await axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/natalia/clear")
}


export const setProfile = (profile) => {
	return {
		type: "SET_PROFILE",
		payload: {
			profile
		}
	}
}


export const getProfileToSwipe = () => async (dispatch) => {
	const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/natalia/person")
	dispatch(setProfile(response.data.profile))
}


export const chooseProfile = (id, choice) => async (dispatch) => {
	const body = {
		id,
		choice
	}
	const response = await axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/natalia/choose-person", body)	
}

export const setMatches = (matches) => {
	return {
		type: "SET_MATCHES",
		payload: {
			matches
		}
	}
}

export const getMatches = () => async (dispatch) => {
	const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/natalia/matches")
	dispatch(setMatches(response.data.matches))
}

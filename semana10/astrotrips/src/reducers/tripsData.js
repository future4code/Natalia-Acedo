const initialState = {
    trips: null,
    tripDetails: null,        
  }

  const tripsData = (state = initialState, action) => {
    switch (action.type) {
      case "SET_TRIPS": {
        return { ...state, trips: action.payload.trip }
        }
      case "SET_TRIP_DETAILS": {
        return {...state, tripDetails: action.payload.tripDetails}
      }
      
      default:
        return state
    }
  }

  export default tripsData

const initialState = {
    trips: null            
  }

  const tripsData = (state = initialState, action) => {
    switch (action.type) {
      case "SET_TRIPS": {
        return { ...state, trips: action.payload.trip }
        }
      default:
        return state
    }
  }

  export default tripsData

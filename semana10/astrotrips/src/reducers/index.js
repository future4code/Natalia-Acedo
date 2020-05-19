import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import tripsData from "./tripsData"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    tripsData
  });

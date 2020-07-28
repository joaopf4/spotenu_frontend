import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import user from "../reducers/user";
// import role from "../Reducers/role";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),  
    user   
  });


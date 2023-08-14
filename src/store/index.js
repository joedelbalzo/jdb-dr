import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

const mainState = (state = [], action) => {
  if (action.type === "SET_MAIN_STATE") {
    return action.mainstate;
  }
  return state;
};

const reducer = combineReducers({
  mainState,
});

export const fetchMain = () => {
  return async (dispatch) => {
    const response = await axios.get("/");
    dispatch({ type: "SET_MAIN_STATE", mainstate: response.data });
  };
};
const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

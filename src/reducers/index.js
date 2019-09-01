import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import jobs from "./jobs";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    jobs
  });

export default createRootReducer;

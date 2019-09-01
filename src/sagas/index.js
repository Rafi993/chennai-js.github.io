import { all } from "redux-saga/effects";

import jobs from "./jobs";

function* rootSaga() {
  yield all([...jobs]);
}

export default rootSaga;

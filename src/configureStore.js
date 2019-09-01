import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import rootReducer from "./reducers";
import saga from "./sagas";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware({});
  const middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger());
  }

  // For devtools extension
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(saga);

  return store;
};

export default configureStore;

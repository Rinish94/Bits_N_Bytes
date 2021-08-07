import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { AuthReducer } from "./Auth/AuthReducer";
import thunk from "redux-thunk"

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export const store = createStore(
  rootReducer,
  compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

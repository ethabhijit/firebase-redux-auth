import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./rootReducer";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") middleware.push(logger);


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);


export default store;
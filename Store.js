import { createStore } from "redux";
import actionReducer from "./Reducer";
export const store = createStore(actionReducer);

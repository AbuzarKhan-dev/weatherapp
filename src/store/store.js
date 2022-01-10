import { combineReducers, createStore } from "redux";
import { rootReducer } from "./RootReducer";


const initialState = {};
const reducers = combineReducers({ getData: rootReducer });

export const store = createStore(reducers, initialState);



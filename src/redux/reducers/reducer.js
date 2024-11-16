import bankReducer from "./bankReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    bankReducer: bankReducer
})
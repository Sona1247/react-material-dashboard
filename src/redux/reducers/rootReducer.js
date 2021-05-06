import { combineReducers } from "redux";
import allDataReducer from "./allDataReducer";
import linkDataReducer from "./linkDataReducer";
export default combineReducers({
    allDataReducer ,
    linkDataReducer
})
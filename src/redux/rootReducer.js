import { combineReducers } from "redux";
import { homePageReducer } from "./homePageReducer";
import { mainCardReducer } from "./mainCradReducer";

export const rootReducer = combineReducers({
    homePageReducer,
    mainCardReducer

});
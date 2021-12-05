import { combineReducers } from "redux";
import { homePageReducer } from "./homePageReducer";
import { mainCardReducer } from "./mainCradReducer";
import { favoritesPageReducer } from "./favoritesPageReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
    homePageReducer,
    mainCardReducer,
    favoritesPageReducer,
    appReducer

});
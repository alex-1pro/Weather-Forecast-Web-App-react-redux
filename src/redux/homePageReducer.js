import { GET_CURRENT_LOCATION, INPUT_TEXT, AUTO_COMPLETE } from "./types";

const intialState = {
    location: {
        longitude: 34.855499,
        latitude: 32.109333
    },
    text: "Tel Aviv",
    cityKey:"215854"
}

export const homePageReducer = (state = intialState, action) => {
    console.log("input homePageReducer", action);

    switch (action.type) {
        // case GET_CURRENT_LOCATION:
        case INPUT_TEXT:
            return {
                ...state,
                text: action.text
            }
        case GET_CURRENT_LOCATION:

            return {
                ...state,
                location: action.location
            }
        case AUTO_COMPLETE:
            const newCity = action.data[0].LocalizedName;
            const newCityKey  = action.data[0].Key;
        return {
                ...state,
                text: newCity,
                cityKey: newCityKey
           }  

        default:
            return state;
    }

}
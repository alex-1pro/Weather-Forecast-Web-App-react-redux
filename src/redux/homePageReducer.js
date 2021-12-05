import { GET_CURRENT_LOCATION, UPDATE_CITY_NAME, AUTO_COMPLETE } from "./types";

const intialState = {
    // location: {
    longitude: 34.855499,
    latitude: 32.109333,
    // },
    text: "Tel Aviv",
    cityKey: "215854"
}

export const homePageReducer = (state = intialState, action) => {

    switch (action.type) {

        case UPDATE_CITY_NAME:
            return {
                ...state,
                text: action.data.city,
                // cityKey:action.data.cityKey

            }
        // case GET_CURRENT_LOCATION:
        //         const gCity = action.data.LocalizedName;
        //         const gCityKey = action.data.Key
        //     return {
        //         ...state,
        //         text:gCity,
        //         cityKey:gCityKey
        //     }

        case GET_CURRENT_LOCATION:
            // const gLongitude = action.data.location.longitude;
            // const gLatitude = action.data.location.latitude;
            return {
                ...state,
                longitude: action.data.location.longitude,
                latitude: action.data.location.latitude
            }
        case AUTO_COMPLETE:
            const newCity = action.data[0].LocalizedName;
            const newCityKey = action.data[0].Key;
            return {
                ...state,
                text: newCity,
                cityKey: newCityKey
            }

        default:
            return state;
    }

}
import {
    API_KEY,
    CURRENT_WEATHER_URI,
    CITY_URI,
    DAILY_FORECASTS
} from "../shared/accWeatherApi";

import {
    GET_CURRENT_LOCATION,
    INPUT_TEXT,
    DEFAULT_LOAD_WEATHER,
    AUTO_COMPLETE
} from "./types";

export function getCurrentLocation() {
    // const location = {};
    // if (!navigator.geolocation) {
    //     // setStatus("Geolocation is'nt support in your browser");
    //     console.log("Geolocation is'nt support in your browser");
    // } else {
    //     // setStatus("Locating...");
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         // setStatus(null);
    //         //setLat(position.coords.latitude);
    //         // setLng(position.coords.longitude);
    //         location.latitude = position.coords.latitude;
    //         location.longitude = position.coords.longitude;

    //         // }, () => {
    //         // setStatus("Unable to retrieve your location");
    //     })
    // }

    // return {
    //     type: GET_CURRENT_LOCATION,
    //     location: location
    // }

    return dispatch => {
        const location = {};
        if (!navigator.geolocation) {
            // setStatus("Geolocation is'nt support in your browser");
            console.log("Geolocation is'nt support in your browser");
        } else {
            // setStatus("Locating...");
            navigator.geolocation.getCurrentPosition((position) => {
                // setStatus(null);
                //setLat(position.coords.latitude);
                // setLng(position.coords.longitude);
                location.latitude = position.coords.latitude;
                location.longitude = position.coords.longitude;
                // }, () => {
                // setStatus("Unable to retrieve your location");
            })
        }
        dispatch({
            type: GET_CURRENT_LOCATION,
            location: location
        });
    }
}

export function inputText(text) {
    return {
        type: INPUT_TEXT,
        text
    }
}


export function defaultLoadWeathr(cityKey = "215854") {
    return async dispatch => {
        try {
            const response = await fetch(CURRENT_WEATHER_URI + cityKey + "?apikey=" + API_KEY);
            const jsonData = await response.json();
            console.log("defaultLoadWeathr>>");
            dispatch({
                type: DEFAULT_LOAD_WEATHER,
                data: jsonData
            })
        } catch (err) {
            console.log("error in loading data >> ", err.type);
        }
    }
}
//http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=RpjLxwm2JADKkxkRyRIfKqqAVQcIA99a&q=tel aviv
export function autoComplete(city) {
    return async dispatch => {
        try {
            const response = await fetch(CITY_URI + "apikey=" + API_KEY + "&q=" + city);
            const jsonData = await response.json();
            dispatch({
                type: AUTO_COMPLETE,
                data: jsonData
            })

        } catch (err) {
            console.log("error in loading data >> ", err.type);
        }
    }
}


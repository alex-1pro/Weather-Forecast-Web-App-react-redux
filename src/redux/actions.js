import {
    API_KEY,
    CURRENT_WEATHER_URI,
    CITY_URI,
    DAILY_FORECASTS_URI
} from "../shared/accWeatherApi";

import {
    GET_CURRENT_LOCATION,
    INPUT_TEXT,
    DEFAULT_LOAD_WEATHER,
    AUTO_COMPLETE,
    DAILY_FORECASTS
} from "./types";

export function getCurrentLocation() {
    const location = {};
    if (!navigator.geolocation) {
        console.log("Geolocation is'nt support in your browser");
    } else {
        navigator.geolocation.getCurrentPosition((position) => {

            location.latitude = position.coords.latitude;
            location.longitude = position.coords.longitude;

        })
    }

    return {
        type: GET_CURRENT_LOCATION,
        location: location
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

export function dailyForecasts(cityKey = "215854") {
    return async dispatch => {
        try {
            const response = await fetch(DAILY_FORECASTS_URI + cityKey + "?apikey" + API_KEY);
            const jsonData = await response.json();
            dispatch({
                type: DAILY_FORECASTS,
                data: jsonData
            })
        } catch (err) {
            console.log("error in loading data >> ", err.type);
        }

    }
}
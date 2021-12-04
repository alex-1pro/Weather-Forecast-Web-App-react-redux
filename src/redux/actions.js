import {
    API_KEY,
    CURRENT_WEATHER_URI,
    CITY_URI,
    DAILY_FORECASTS_URI
} from "../shared/accWeatherApi";

import {
    GET_CURRENT_LOCATION,
    UPDATE_CITY_NAME,
    DEFAULT_LOAD_WEATHER,
    AUTO_COMPLETE,
    DAILY_FORECASTS,
    CHANGE_UNIT_DEGREES,
    ADD_TO_FAVORITES,
    CURRENT_WEATHER_FROM_FAVORITES
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
            const response = await fetch(DAILY_FORECASTS_URI + cityKey + "?apikey=" + API_KEY);
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

export function changeUnitDegrees(unit) {
    return {
        type: CHANGE_UNIT_DEGREES,
        unit: unit
    }
}

export function addToFavorites(city, cityKey, currentWeather, dailyWeather) {
    return {
        type: ADD_TO_FAVORITES,
        data: {
            city,
            cityKey,
            currentWeather,
            dailyWeather
        }
    }
}

// CURRENT_WEATHER_FROM_FAVORITES
export function weatherFromFavorites(city, cityKey, currentWeather, dailyWeather) {
    return dispatch => {
        dispatch({
            type: UPDATE_CITY_NAME,
            data: {
                city,
                cityKey
            }
        });
        dispatch({
            type: CURRENT_WEATHER_FROM_FAVORITES,
            data: {
                currentWeather,
                dailyWeather
            }
        });

    }
}



import {
    API_KEY,
    CURRENT_WEATHER_URI,
    CITY_URI,
    DAILY_FORECASTS_URI,
    CURRENT_LOCATION_GEOPOSITION_URI
} from "../shared/accWeatherApi";

import {
    GET_CURRENT_LOCATION,
    UPDATE_CITY_NAME,
    DEFAULT_LOAD_WEATHER,
    AUTO_COMPLETE,
    DAILY_FORECASTS,
    CHANGE_UNIT_DEGREES,
    ADD_TO_FAVORITES,
    CURRENT_WEATHER_FROM_FAVORITES,
    ERROR_DISPALY_ON,
    ERROR_DISPALY_OFF
} from "./types";


//http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=yIS7IdPp0gk2fQ4NU5fRmpEjBZoJvzKR&q=32.085300%2C34.781769&toplevel=true
export function  currentGeopostion() {
    
    const location = {
        latitude: 0,
        longitude: 0
    };
    if (!navigator.geolocation) {
        console.log("Geolocation is'nt support in your browser");
    } else {
        navigator.geolocation.getCurrentPosition((position) => {

            location.latitude = position.coords.latitude;
            location.longitude = position.coords.longitude;


        })
        return {
            type: GET_CURRENT_LOCATION,
            data: {
                location
            }
        }
    }


}



function getCurrentLocation(latitude, longitude) {

    return async dispatch => {

        console.log("location  getCurrentLocation >>>>", latitude, longitude);
        try {
            const response = await fetch(CURRENT_LOCATION_GEOPOSITION_URI +
                "?apikey=" + API_KEY + "&q=" + latitude + "C" + longitude + "&toplevel=true");
            const jsonData = await response.json();
            dispatch({
                type: GET_CURRENT_LOCATION,
                data: jsonData
            })

        } catch (err) {
            // console.log("error in loading data >> ", err.type);
            dispatch(errorOn("error API"));
        }
    }

}



export function defaultLoadWeathr(cityKey = "215854") {
    return async dispatch => {
        try {
            const response = await fetch(CURRENT_WEATHER_URI + cityKey + "?apikey=" + API_KEY);
            const jsonData = await response.json();
            dispatch({
                type: DEFAULT_LOAD_WEATHER,
                data: jsonData
            })
        } catch (err) {
            // console.log("error in loading data >> ", err.type);
            dispatch(errorOn("error API"));
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
            // console.log("error in loading data >> ", err.type);
            dispatch(errorOn("error API"));
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
            // console.log("error in loading data >> ", err.type);
            dispatch(errorOn("error API"));
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


export function errorOn(text) {
    
    return dispatch => {
        dispatch({
            type: ERROR_DISPALY_ON,
            text
        });
        setTimeout(()=>{
            dispatch(errorOff());
        },2000)
    }
}

export function errorOff() {
    return {
        type: ERROR_DISPALY_OFF

    }
}
import { DEFAULT_LOAD_WEATHER } from "./types";

const intialState = {
    weather: []
}

export const mainCardReducer = (state = intialState, action) => {
    console.log("mainCard Reducer > ", action);
    switch (action.type) {

        case DEFAULT_LOAD_WEATHER:
            const currentWeather = action.data.map(res => {

                return {
                    weatherText: res.WeatherText,
                    weatherIcon: res.WeatherIcon,
                    celsius: res.Temperature.Metric.Value,
                    fahrenheit: res.Temperature.Imperial.Value,
                    date: res.LocalObservationDateTime
                }
            })

            return {
                ...state,
                weather: currentWeather
            }

        default:
            return state;
    }
}
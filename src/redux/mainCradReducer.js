import { DEFAULT_LOAD_WEATHER, DAILY_FORECASTS } from "./types";

const intialState = {
    weather: [],
    weatherDaily: []
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
        case DAILY_FORECASTS:
            const newDailyForecasts = action.data.DailyForecasts.map(res => {

                const fahMinValue = res.Temperature.Minimum.Value;
                const fahMaxValue = res.Temperature.Maximum.Value;
                const celMinValue = fToC(fahMinValue);
                const celMaxValue = fToC(fahMaxValue);
                /*** Day and Night objects have *** 
                 * "Day": {
                "Icon": 6,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": false
       
                 */
                return {
                    weatherDay: res.Day,
                    weatherNight: res.Night,
                    weatherIconDay: res.WeatherIcon,
                    celsiusMin: celMinValue,
                    celsiusMax: celMaxValue,
                    fahrenheitMin: fahMinValue,
                    fahrenheitMax: fahMaxValue,
                    date: res.Date,

                }
            })
            return {
                ...state,
                weatherDaily:newDailyForecasts
            }

        default:
            return state;
    }
}

function round(num) {
    const m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}
function fToC(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return round(celsius);
}
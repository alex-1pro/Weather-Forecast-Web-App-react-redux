import { ADD_TO_FAVORITES } from './types';

const intialState = {
    citiesForecasts: []

};
/**
 *  data: {
            city,
            currentWeather,
            dailyWeather
        }
 */
export const favoritesPageReducer = (state = intialState, action) => {
    console.log("favoritesPageReducer", action);

    switch (action.type) {
        case ADD_TO_FAVORITES:

            const { data } = action;
            const { citiesForecasts } = state;
            const itemIndex = citiesForecasts.findIndex(res => res.cityKey === data.cityKey);
            const nextCitiesForecasts = [...citiesForecasts];
            console.log("itemIndex>>>>>>>>", (!!itemIndex));
            if (itemIndex > -1) {
                nextCitiesForecasts.splice(itemIndex, 1, data);
            }
            else {
                nextCitiesForecasts.push(data);
            }
            // nextCitiesForecasts.push(data);

            return {
                ...state,
                citiesForecasts: nextCitiesForecasts
            }

        default:
            return state;
    }

}


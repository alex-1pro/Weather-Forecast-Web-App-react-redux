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

    switch (action.type) {
        case ADD_TO_FAVORITES:

            const { data } = action;
            const { citiesForecasts } = state;
            const itemIndex = citiesForecasts.findIndex(res => res.cityKey === data.cityKey);
            const nextCitiesForecasts = [...citiesForecasts];
            if (itemIndex > -1) {
                nextCitiesForecasts.splice(itemIndex, 1, data);
            }
            else {
                nextCitiesForecasts.push(data);
            }
          

            return {
                ...state,
                citiesForecasts: nextCitiesForecasts
            }

        default:
            return state;
    }

}


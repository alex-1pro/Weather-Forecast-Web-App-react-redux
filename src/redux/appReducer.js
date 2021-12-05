import {
    ERROR_DISPALY_ON,
    ERROR_DISPALY_OFF
} from "./types";

const initialState = {
    loading: false,
    error: null
}

export const appReducer = (state = initialState, action) => {
       console.log('input text Reducer > ',action);
    switch (action.type) {

        case ERROR_DISPALY_ON:
            return {
                ...state,
                error: action.text
            }
        case ERROR_DISPALY_OFF:
            return {
                ...state,
                error: null
            }


        default:
            return state;
    }
}
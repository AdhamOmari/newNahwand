import { SET_LANGUAGE } from './actionTypes';

const initialState = {
    isArabic: 'ar',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                isArabic: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
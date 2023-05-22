import { SET_LANGUAGE } from './actionTypes';



export const setLanguage = (isArabic) => (dispatch) => {
    dispatch({
        type: SET_LANGUAGE,
        payload: isArabic,
    });
};
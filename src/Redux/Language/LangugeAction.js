import { SET_LANGUAGE } from './actionTypes';

export const setLanguage = (isArabic) => {
    return {
        type: SET_LANGUAGE,
        payload: isArabic,
    };
};
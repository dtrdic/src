import * as types from '../constants/actionTypes';

export function fetchInitialSurveyData(response) {
    return {
        type: types.FETCH_INITIAL_SURVEY_DATA,
        payload: response
    };
}
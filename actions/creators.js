import * as types from '../constants/actionTypes';

export function fetchInitialSurveyData(response) {
    return {
        type: types.FETCH_INITIAL_SURVEY_DATA,
        payload: response
    };
}

export function updateProperty(propertyName, value) {
    return {
        type: types.UPDATE_PROPERTY,
        propertyName,
        value
    };
}

export function showSpinner() {
    return {
        type: types.SHOW_SPINNER,
        visible: true
    };
}

export function hideSpinner() {
    return {
        type: types.HIDE_SPINNER,
        visible: false
    };
}

export function updateValidationErrors(values) {
    return {
        type: types.UPDATE_VALIDATION_ERRORS,
        errors: values
    };
}
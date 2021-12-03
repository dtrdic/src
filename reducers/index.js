import { combineReducers } from 'redux';
import surveyFormData from './surveyFormData';
import spinnerVisible from './spinnerVisible';
import validationErrors from './validationErrors';


const surveyCombinedReducers = combineReducers({
    surveyFormData,
    spinnerVisible,
    validationErrors
});

export default surveyCombinedReducers;
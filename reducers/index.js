// import { configureStore } from '@reduxjs/toolkit';

// import surveyFormData from './surveyFormData';

// const store = configureStore({
//   reducer: { surveyFormData: surveyFormData.reducer },
// });

// export default store;
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
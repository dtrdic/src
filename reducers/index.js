import { configureStore } from '@reduxjs/toolkit';

import surveyFormData from './surveyFormData';

const store = configureStore({
  reducer: { surveyFormData: surveyFormData.reducer },
});

export default store;
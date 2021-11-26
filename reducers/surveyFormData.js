import { createSlice } from '@reduxjs/toolkit';


const surveyFormData = createSlice({
    name: 'surveyFormData',
    initialState: { 
        data: {
                type: '',
                id: '',
                atributes: {
                    title: '',
                    description: '',
                    questions: [{
                        questionId: '',
                        questionType: '',
                        label: '',
                        required: false,
                        attributes: {
                            min: 0,
                            max: 0
                        }
                    }]
                }
            },
        cartIsVisible: false },

    reducers: {
      toggle(state) {
        state.cartIsVisible = !state.cartIsVisible;
      }
    }
  });
  
  export const uiActions = surveyFormData.actions;
  
  export default surveyFormData;
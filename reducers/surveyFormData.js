import { FETCH_INITIAL_SURVEY_DATA } from '../constants/actionTypes'

const surveyDataInit = {
        data: {
                type: '',
                id: '',
                attributes: {
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
}

  const surveyFormData = (state = surveyDataInit, action) => {
    switch (action.type) {
        case FETCH_INITIAL_SURVEY_DATA:
            const iData = Object.assign({}, state, action.payload);
            debugger;
            return iData;

        default:
            return state;
    }
};
  
  export default surveyFormData;
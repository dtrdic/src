import { FETCH_INITIAL_SURVEY_DATA, UPDATE_PROPERTY } from '../constants/actionTypes'

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
    const data = Object.assign({}, state);
    switch (action.type) {
        case FETCH_INITIAL_SURVEY_DATA:
            const initData = Object.assign({}, state, action.payload);
            debugger;
            return initData;
        case UPDATE_PROPERTY:
            data.data.attributes.questions.questionId = action.value;
            data.data.attributes.questions.questionType = action.value;
            // data.data.attributes.questions.attributes.min = action.value;
            // data.data.attributes.questions.attributes.max = action.value;
            //data.data.attributes.questions[action.propertyName] = action.value;
            debugger;
            return data;

        default:
            return state;
    }
};
  
  export default surveyFormData;
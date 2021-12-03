import { FETCH_INITIAL_SURVEY_DATA, UPDATE_PROPERTY, SHOW_SUCCESS_PAGE } from '../constants/actionTypes'

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
                },
                isSubmitted: false
            },
        answers: []
}

  const surveyFormData = (state = surveyDataInit, action) => {
    switch (action.type) {
        case FETCH_INITIAL_SURVEY_DATA:
            const initData = Object.assign({}, state, action.payload);
            return initData;

        case UPDATE_PROPERTY:
            const newObject = Object.assign({}, state, {
                answers: [...state.answers, {questionId: action.propertyName, answer: action.value}]
            });
            return newObject;

        case SHOW_SUCCESS_PAGE:
            const data = Object.assign({}, state);
                data.isSubmitted = true;
            return data;

        default:
            return state;
    }
};
  
  export default surveyFormData;
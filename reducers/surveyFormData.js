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
    switch (action.type) {
        case FETCH_INITIAL_SURVEY_DATA:
            const initData = Object.assign({}, state, action.payload);
            return initData;
        case UPDATE_PROPERTY:
            const data = Object.assign({}, state);

            // data.data.attributes.questions[action.propertyName] = action.value;
            // return data;

            //data.data.attributes.questions.questionId = action.value;
            // data.data.attributes.questions.attributes.min = action.value;
            // data.data.attributes.questions.attributes.max = action.value;
            //data.data.attributes.questions[action.propertyName] = action.value;
            const newObject = {
                   questions: [{
                      questionId: action.propertyName,
                      answer: action.value,
                   }]
                };
                // data.data.attributes.questions.forEach(element => {
                //     newObject.questions.push({questionId: element.propertyName, answer: element.value})
                // });
        //   newObject.questions.questionId=[action.propertyName];
        //   newObject.questions.answer=[action.value];
          return Object.assign({}, state, newObject);

        default:
            return state;
    }
};
  
  export default surveyFormData;
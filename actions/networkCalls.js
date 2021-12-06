import axios from 'axios';
import * as constants from '../constants/actionTypes';
import * as creators from '../actions/creators';
import _ from 'lodash';

export const getInitialData = () => (dispatch) => {
    dispatch(creators.showSpinner());

    let data = {
        type: 'surveys',
        id: '2660dd24-e2db-42c1-8093-284b1df2664c',
        attributes: {
            title: 'Film feedback form',
            description: '<p>Thank you for participating in the film festival!</p><p>Please fill out this short survey so we can record your feedback.</p>',
            questions: [{
                questionId: 'film',
                questionType: 'text',
                label: 'What film did you watch?',
                required: true,
                attributes: null
            },
            {
                questionId: 'review',
                questionType: 'rating',
                label: 'How would you rate the film? (1 - Very bad, 5 - Very good)',
                required: true,
                attributes: {
                    min: 1,
                    max: 5
                }
            }]
        }
    };
    const url = `${constants.API_SURVEY_URL}`;

    axios.get(url)
        .then((response) => {
            if(response.status === 200)
            dispatch(creators.fetchInitialSurveyData(data));
            dispatch(creators.hideSpinner());
        })
        .catch(function (errors) {
            console.log(errors);
            dispatch(creators.hideSpinner());
        });;

    dispatch(creators.fetchInitialSurveyData(data));
    dispatch(creators.hideSpinner());
};

export const submitFormAnswers = () => (dispatch, getState) => {
    dispatch(creators.showSpinner());
    const { surveyFormData } = getState();

    const answersArray = surveyFormData.answers;

    var transformed = [];
    for(const property in answersArray){
        var newObject = {questionId: property, answer: answersArray[property]};
        transformed.push(newObject);
    }

    const userId = '9c7160a4-e9ad-499e-92f6-07d7cdb0382c';
    const surveyId = surveyFormData.id;

    const payload = {
        type: 'surveyAnswers',
        id: userId,
        attributes: {
            answers: transformed
        },
        relationships: {
            survey: {
                data: {
                    type: 'surveys',
                    id: surveyId
                }
            }
        }
    }

    const validationErrors = validateData(answersArray);

    dispatch(creators.updateValidationErrors(validationErrors));

    if (validationErrors.length > 0) {
        return;
    }
    dispatch(creators.showSuccesPage(transformed));
    dispatch(creators.hideSpinner());

    const url = `${constants.API_SURVEY_URL}/${surveyId}/answers`;

    axios.post(url, payload)
            .then(response => {
                if (!response.status === 201) {
                    if (response.errors.length > 0) {
                        dispatch(creators.updateValidationErrors(response.errors));
                    }
                } else {
                    dispatch(creators.showSuccesPage(transformed));
                }
            });

    dispatch(creators.hideSpinner());

}


function validateData(answers) {
    const errors = [];

    if(_.isNil(answers.film)) {
        errors.push({ source: 'film', detail: 'The value is required' });
    }

    if(_.isNil(answers.review)) {
        errors.push({ source: 'review', detail: 'The value is required' });
    }

    return errors;
};
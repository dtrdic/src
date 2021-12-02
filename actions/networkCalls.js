import axios from 'axios';
import * as constants from '../constants/actionTypes';
import * as creators from '../actions/creators';
import _ from 'lodash';
//import { useNavigate  } from 'react-router-dom';

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
    // const url = `${constants.API_SURVEY_URL}`;

    // axios.get(url)
    //         .then((response) => {
    //             if(response.status === 200)
    //             dispatch(creators.fetchInitialSurveyData(data));
    //             dispatch(creators.hideSpinner());
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //             dispatch(creators.hideSpinner());
    //         });;

    dispatch(creators.fetchInitialSurveyData(data));
    dispatch(creators.hideSpinner());


};

export const submitFormAnswers = () => (dispatch, getState) => {
    dispatch(creators.showSpinner());
    const { surveyFormData } = getState();

    const userId = '9c7160a4-e9ad-499e-92f6-07d7cdb0382c';
    const payload = {
        type: 'surveyAnswers',
        id: userId,
        attributes: {
            answers: surveyFormData.answers
        },
        relationships: {
            survey: {
                data: {
                    type: 'surveys',
                    id: surveyFormData.id
                }
            }
        }
    }

    // const validationErrors = validateData(payload.attributes.answers);

    // dispatch(creators.updateValidationErrors(validationErrors));

    // if (validationErrors.length > 0) {
    //     return;
    // }
    
    dispatch(creators.showSuccesPage());

    // localStorage.setItem(
    //     'userReview',
    //     JSON.stringify(payload.attributes.answers)
    //   );
    //   window.location.assign('/success')


    const url = `${constants.API_SURVEY_URL}/${payload.id}/answers`;

    axios.post(url, payload)
            .then((response) => {
                if(response.status === 201)
                localStorage.setItem(
                    'userReview',
                    JSON.stringify(payload.attributes.answers)
                    );
                dispatch(creators.hideSpinner());
            })
            .catch(function (error) {
                console.log(error);
            });;

    // const postReview = async (e) => {
    //     if (payload.attributes.answers) {
    //         console.log('post request');
    //         navigate('/success');
    
    //         await url
    //         .post(url, payload)
    //         .then((res) => {
    //             if (res.status === 201) {
    //             localStorage.setItem(
    //                 'userReview',
    //                 JSON.stringify(payload.attributes.answers)
    //             );
    //             }
    //             navigate('/success');
    //             console.log(res, 'post res!!!');
    //         })
    //         .catch((err) => console.log(err));
    //     }
    //     e.preventDefault();
    //     };
    
    dispatch(creators.hideSpinner());

    function validateData(answers) {
        const errors = [];

        if (_.isNil(answers[0].questionId) || (_.isNil(answers[0].answer))) {
                errors.push({ source: answers.questionId, detail: 'The value is required' });
            }
        if (_.isNil(answers[1].questionId) || (_.isNil(answers[1].answer))) {
            errors.push({ source: answers.questionId, detail: 'The value is required' });
        }
    };
}
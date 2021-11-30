import axios from 'axios';
import * as constants from '../constants/actionTypes';
import * as creators from '../actions/creators';
import { useNavigate  } from 'react-router-dom';

export const getInitialData = () => (dispatch) => {

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

    dispatch(creators.fetchInitialSurveyData(data));
     dispatch(creators.showSpinner());
     dispatch(creators.hideSpinner());

    // const accountId = utility.getQueryStringsValue('AccountId');
    // const url = utility.addParamsToUrl(`${constants.API_SURVEY_URL}${constants.ACCOUNT_SETUP_ASSISTANT_GET_API_URL}/${accountId}`);

    // const request = axios.get(url);

    // ErrorHandler.axiosErrorHandler(request)
    //     .then(response => {
    //         if (response.data.success && !response.data.isWarning) {
    //             dispatch(creators.getInitialDataGeneralSetup(response.data));
    //         } else {
    //             toastr.error(response.data.message);
    //             window.location = constants.ACCOUNT_MANAGEMENT_URL;
    //         }
    //         dispatch(creators.hideSpinner());
    //     });
};

export const submitFormAnswers = () => (dispatch, getState) => {
    const { surveyFormData } = getState();
    dispatch(creators.showSpinner());
    let navigate = useNavigate();

    // const payload2 = {
    // attributes: {
    //     answers: [{
    //         questionId:surveyFormData.data.attributes.questions,
    //         answer:surveyFormData.data.attributes.questions
    //     },]}}
    //     const tertr = payload2;

    const userId = '9c7160a4-e9ad-499e-92f6-07d7cdb0382c';
    const payload = {
        type: 'surveyAnswers',
        id: userId,
        attributes: {
            answers: [{
                questionId:surveyFormData.questions[0].questionId,
                answer:surveyFormData.questions[0].answer
            },
            {
                questionId:surveyFormData.questions[1]?.questionId,
                answer:surveyFormData.questions[1]?.answer
            }
        ]
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

    localStorage.setItem(
        'userReview',
        JSON.stringify(payload.attributes.answers)
      );
      //navigate('/success');


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

    debugger;
}
// import axios from 'axios';
// import * as constants from '../constants/index';
import * as creators from '../actions/creators';

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
                label: '"How would you rate the film? (1 - Very bad, 5 - Very good)',
                required: true,
                attributes: {
                    min: 1,
                    max: 5
                }
            }]
        }
    };

    dispatch(creators.fetchInitialSurveyData(data));
    // dispatch(creators.showSpinner());

    // const accountId = utility.getQueryStringsValue('AccountId');
    // const url = utility.addParamsToUrl(`${constants.GENERAL_SETUP_URL}${constants.ACCOUNT_SETUP_ASSISTANT_GET_API_URL}/${accountId}`);

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
    debugger;
    const data = {
        type: 'surveyAnswers',
        id: surveyFormData.data.attributes.id,
        attributes: {
            answers: [{
                questionId:surveyFormData.data.attributes.questionId,
                answer:surveyFormData.data.attributes.questionType
            }]
        },
        relationships: {
            survey: {
                data: {
                    type: "surveys",
                    id: "nekiid"
                }
            }
        }
    }

    const url = data;
    debugger;
}
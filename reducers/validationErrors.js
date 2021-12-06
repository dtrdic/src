import { UPDATE_VALIDATION_ERRORS } from '../constants/actionTypes';

const validationErrors = (state = [], action) => {
    switch (action.type) {
        case UPDATE_VALIDATION_ERRORS:
            let changedErrors = Object.assign([], state);
            changedErrors = [];
            action.errors.forEach(item => {
                changedErrors.push({ propertyName: item.source, errorMessage: item.detail });
            });
            return changedErrors;

        default:
            return state;
    }
};

export default validationErrors;
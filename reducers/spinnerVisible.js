import { SHOW_SPINNER, HIDE_SPINNER } from '../constants/actionTypes';

const spinnerVisible = (state = false, action) => {
    switch (action.type) {
        case SHOW_SPINNER:
        case HIDE_SPINNER:
            return action.visible;
        default:
            return state;
    }
};

export default spinnerVisible;
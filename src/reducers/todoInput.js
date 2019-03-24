import {
    TODO_INPUT_CHANGE,
} from '../constants';

const initialState = {
    value: '',
};

const language = (state = initialState, action) => {
    switch (action.type) {
        case TODO_INPUT_CHANGE:
            return {
                ...state,
                value: action.payload,
            };
        default:
            return state;
    }
};

export default language;
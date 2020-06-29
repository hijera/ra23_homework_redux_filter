import { FILTER } from '../actions/actionTypes';

const initialState = {
    text:"",
};

export default function serviceFilterReducer(state = initialState, action) {
    switch (action.type) {
        case FILTER:
            const { filter_string } = action.payload;
            return {...state, text : filter_string};
        default:
            return state;
    }
}

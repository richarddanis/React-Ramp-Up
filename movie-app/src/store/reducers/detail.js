import * as actionType from '../actions/actions';

const initialState = {details: [], isLoaded: false};

const details = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
        case actionType.MOVIE_DETAILS:
            return {
                ...state,
                details: action.payload,
                isLoaded: true
            };
        case actionType.DELETE_DETAILS:
            return {
                ...state,
                details: [],
                isLoaded: false
            }
    }
    return state;
}

export default details;
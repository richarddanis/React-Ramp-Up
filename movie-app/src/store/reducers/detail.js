import * as actionType from '../actions/actions';

const initialState = {details: []};

const details = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
        case actionType.MOVIE_DETAILS:
            return {
                ...state,
                details: action.payload
            };
    }
    return state;
}

export default details;
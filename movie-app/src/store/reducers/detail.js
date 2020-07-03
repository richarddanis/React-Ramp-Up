import * as actionType from '../actions/actions';

const initialState = {details: []};

const details = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    console.log('Details action: ', actionType);
    switch(action.type){
        case actionType.MOVIE_DETAILS:
            return {
                ...state,
                details: action.payload
            };
        case actionType.DELETE_DETAILS:
            return {
                ...state,
                details: []
            }
    }
    return state;
}

export default details;
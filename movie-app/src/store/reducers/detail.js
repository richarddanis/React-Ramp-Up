import * as actionType from '../actions';

const initialState = {details: []};

const details = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
        case actionType.DETAILS:
            console.log('DETAILS');
            return {
                ...state,
                details: []
            };
    }
}

export default details;
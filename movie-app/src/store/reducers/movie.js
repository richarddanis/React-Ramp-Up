import * as actionType from '../actions/actions';

const initialState = {
    movies:[],
    totalAmount: 0
}

const movie = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionType.FETCH_MOVIE:
            return {
                ...state,
                movies: action.payload.data,
                totalAmount: action.payload.totalAmount
            }
    }
    return state;
}

export default movie;
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
        case actionType.DELETE_MOVIE:
            console.log(action.payload)
            return {
                ...state,
                movies: state.movies.filter(movie => movie.id !== action.payload)
            }
    }
    return state;
}

export default movie;
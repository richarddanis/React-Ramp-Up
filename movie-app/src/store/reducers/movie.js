import * as actionType from '../actions/actions';

const initialState = {
    movies:[]
}

const movie = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionType.FILTER_MOVIE:
            const updatedArray = state.movies.filter(movie => movie.id !== 'a1b2');
            return {
                ...state,
                movies: updatedArray
            }
        case actionType.SORT_MOVIE:
            return {
                ...state,
                state
            }
        case actionType.FETCH_MOVIE:
            return {
                ...state,
                movies: action.payload
            }
    }
    return state;
}

export default movie;
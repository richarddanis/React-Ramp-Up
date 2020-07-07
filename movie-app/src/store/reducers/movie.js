import * as actionType from '../actions/actions';

const initialState = {
    movies:[],
    totalAmount: 0,
    isShowModal: false,
    movie: {
        id: undefined,
        title: '',
        release_date: '',
        poster_path: '',
        genres: [],
        overview: '',
        runtime: ''
    }
}

const movie = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionType.FETCH_MOVIE:
            return {
                ...state,
                isShowModal: false,
                movies: action.payload.data,
                totalAmount: action.payload.totalAmount
            }
        case actionType.SHOW_MOVIE_MODAL: 
            return {
                ...state,
                movie: action.payload.movie,
                isShowModal: true
            }
        case actionType.CLOSE_FORM_MODAL: 
            return {
                ...state,
                isShowModal: initialState.isShowModal,
                movie: initialState.movie
            }
        case actionType.SAVE_MOVIE:
            return {
                ...state,
                movies: [...state.movies, action.payload],
                isShowModal: initialState.isShowModal,
                movie: initialState.movie
            }
    }
    return state;
}

export default movie;
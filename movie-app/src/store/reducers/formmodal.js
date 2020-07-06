import * as actionType from '../actions/actions';

const initialState = {
    isShowModal: false,
    movie: {
        id: null,
        title: '',
        release_date: '',
        poster_path: '',
        genres: [],
        overview: '',
        runtime: ''
    }
}

const form = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
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
                movies: state.movies.concat(action.payload.movie),
                isShowModal: initialState.isShowModal,
                movie: initialState
            }
    }
    return state;
}

export default form;
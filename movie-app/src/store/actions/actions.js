import axios from 'axios';

export const FILTER_MOVIE = 'FILTER';
export const SORT_MOVIE = 'SORT';
export const MOVIE_DETAILS = 'DETAILS';
export const FETCH_MOVIE = 'FETCH_MOVIE_GET';
export const FETCH_MOVIE_ERROR = 'FETCH_MOVIE_ERROR';
export const DELETE_DETAILS = 'DELETE_MOVIE_DETAILS';

// FORM MODAL
export const SHOW_MOVIE_MODAL = 'SHOW_MOVIE_MODAL';
export const CLOSE_MOVIE_MODAL = 'CLODE_MOVIE_MODAL';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const SAVE_MOVIE = 'ADD_MOVIE';
export const CLOSE_FORM_MODAL = 'CLOSE_FORM_MODAL';

export const fetchMovies = (queryParam = '') => {
  return dispatch => {
      const resource = 'http://localhost:4000/movies'+ queryParam;
      axios.get(resource)
      .then(response => {
        dispatch(fetchMovieAction(response.data))
      })
      .catch(error =>{
        dispatch(() => console.log('something went wrong while initing movies'))
      });
  }
}

export const movieDetails = (movieId) => {
  return dispatch => {
    const resource = 'http://localhost:4000/movies/' + movieId;
    axios.get(resource)
    .then(response => {
      dispatch(fetchMovieDetails(response.data))
    })
    .catch(error =>{
      dispatch(() => console.log('something went wrong while initing movies'))
    });
  }
}

export const handleEditMovie = (movie) => {
  return dispatch => {
    console.log('Add new movie: ', movie)
    if(movie.id === null){ movie.id = Math.random();}
    dispatch(onSaveEditMovie(movie));
  }
}

export const showMovieForm = (movie = {}) => {
  return dispatch => {
     dispatch(handleFormMovie(movie))
  }
}

export const onCloseMovieForm = () => {
  return dispatch =>{
    dispatch(handleCloseEvent())
  }
}

export const onDeleteMovie =(movieId) => {
  return dispatch => {
    dispatch(handleDeleteEvent(movieId));
  }
}

function handleDeleteEvent(movieId){
  return {
    type: DELETE_MOVIE,
    payload: movieId
  }
}

function handleCloseEvent(){
  return {
    type: CLOSE_FORM_MODAL
  }
}

function onSaveEditMovie(movie) {
  return {
    type: SAVE_MOVIE,
    payload: movie
  }
}

function handleFormMovie(movie) {
    return{
      type: SHOW_MOVIE_MODAL,
      payload: {movie}
    }
}

export const onCloseMovieDetails = () => {
  return {
    type: DELETE_DETAILS
  }
}

function fetchMovieAction(movies){
    return {
      type: FETCH_MOVIE,
      payload: movies
    }
}

function fetchMovieDetails(movie){
  return {
    type: MOVIE_DETAILS,
    payload: movie
  }
}
  
function fetchMovieError() {
    return {
      type: FETCH_MOVIE_ERROR
    }
}

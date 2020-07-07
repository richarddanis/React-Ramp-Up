import axios from 'axios';

export const FILTER_MOVIE = 'FILTER';
export const SORT_MOVIE = 'SORT';
export const MOVIE_DETAILS = 'DETAILS';
export const FETCH_MOVIE = 'FETCH_MOVIE_GET';
export const DELETE_DETAILS = 'DELETE_MOVIE_DETAILS';

// FORM MODAL
export const SHOW_MOVIE_MODAL = 'SHOW_MOVIE_MODAL';
export const CLOSE_MOVIE_MODAL = 'CLODE_MOVIE_MODAL';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const SAVE_MOVIE = 'SAVE_MOVIE';
export const CLOSE_FORM_MODAL = 'CLOSE_FORM_MODAL';
export const EDIT_MOVIE = 'EDIT_MOVIE';

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

export const handleMovieDetailsLoad = (movieId) => {
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

export const handleSaveEditFormMovie = (movie) => {
  return dispatch => {
    if(movie.id === undefined){
      const resource = 'http://localhost:4000/movies';
      axios.post(resource, movie)
      .then(response => {
        dispatch(fetchMovies())
      })
      .catch(error =>{
        dispatch(() => console.log(error))
      });
    } else {
      const resource = 'http://localhost:4000/movies';
      axios.put(resource, movie)
      .then(response => {
        dispatch(fetchMovies())
      })
      .catch(error =>{
        dispatch(() => console.log(error))
      });
    }
  }
}

export const handleShowMovieForm = (movie = {}, isEditableMovie = false) => {
  return dispatch => {
     dispatch(openMovieFormAction(movie, isEditableMovie))
  }
}

export const handleCloseMovieForm = () => {
  return dispatch =>{
    dispatch(closeFormAction())
  }
}

export const handleDeleteMovie =(movieId) => {
  return dispatch => {
    const resource = 'http://localhost:4000/movies/' + movieId;
    axios.delete(resource)
    .then(response => {
        dispatch(fetchMovies())
    })
    .catch(error =>{
      dispatch(() => console.log('something went wrong while initing movies'))
    });
  }
}

function closeFormAction(){
  return {
    type: CLOSE_FORM_MODAL
  }
}

function openMovieFormAction(movie, isEditableMovie) {
    return{
      type: SHOW_MOVIE_MODAL,
      payload: {movie, isEditableMovie}
    }
}

export const closeMovieDetailsAction = () => {
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

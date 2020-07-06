import axios from 'axios';

export const FILTER_MOVIE = 'FILTER';
export const SORT_MOVIE = 'SORT';
export const MOVIE_DETAILS = 'DETAILS';
export const FETCH_MOVIE = 'FETCH_MOVIE_GET';
export const FETCH_MOVIE_ERROR = 'FETCH_MOVIE_ERROR';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const DELETE_DETAILS = 'DELETE_MOVIE_DETAILS';

export const fetchMovies = (queryParam = '') => {
  return dispatch => {
      const resource = 'http://localhost:4000/movies'+ queryParam;
      axios.get(resource)
      .then(response => {
        dispatch(fetchMovieAction(response.data.data))
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

export const deleteMovieDetails = () => {
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

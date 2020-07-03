import axios from 'axios';

export const FILTER_MOVIE = 'FILTER';
export const SORT_MOVIE = 'SORT';
export const MOVIE_DETAILS = 'DETAILS';
export const FETCH_MOVIE = 'FETCH_MOVIE_GET';
export const FETCH_MOVIE_ERROR = 'FETCH_MOVIE_ERROR';


export const initMovies = () => {
  return dispatch => {
      axios.get('http://localhost:4000/movies')
      .then(response => {
        dispatch(fetchMovies(response.data.data))
      })
      .catch(error =>{
        dispatch(() => console.log('something went wrong while initing movies'))
      });
  }
}

export const filterMovies = (filterBy) => {
  return dispatch => {
    axios.get('http://localhost:4000/movies?filter='+ filterBy)
    .then(response => {
       dispatch(fetchMovies(response.data.data))
    }).catch(
      error => {
        dispatch(() => console.log('something wrong went while sorting movie'))
      }
    )
  }
}

export const sortMovies = (sortBy) => {
  return dispatch => {
    axios.get('http://localhost:4000/movies?sortOrder=asc&sortBy=' + sortBy)
    .then(response => {
        dispatch(fetchMovies(response.data.data))
    }).catch(
      error => {
        dispatch(() => console.log('something wrong went while sorting movie'))
      }
    )
  }
}

function fetchMovies(movies){
    return {
      type: FETCH_MOVIE,
      payload: movies
    }
}
  
function fetchMovieError() {
    return {
      type: FETCH_MOVIE_ERROR
    }
}

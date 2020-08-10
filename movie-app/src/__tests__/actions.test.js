import * as actions from '../store/actions/actions';

describe('actions', () => {
    it('should create an action to open movie form', () => {
      const movie = 'Finish docs'
      const isEditableMovie = true

      const expectedAction = {
        type: 'SHOW_MOVIE_MODAL',
        payload: {movie, isEditableMovie}
      }
      expect(actions.openMovieFormAction(movie, isEditableMovie)).toEqual(expectedAction)
    })
  })

import reducer from '../store/reducers/detail';
import * as actionType from '../store/actions/actions';

describe('detail reducer', () => {
    it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
            {
                details: [], 
                isLoaded: false
            }
        )
    })

    it('should handle MOVIE_DETAILS', () => {
        expect(
          reducer([], {
            type: actionType.MOVIE_DETAILS,
            payload: 'movie'
          })
        ).toEqual(
          {
            isLoaded: true,
            details: 'movie'
          }
        )
    })
})

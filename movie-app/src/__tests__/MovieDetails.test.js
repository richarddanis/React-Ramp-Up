import { shallow } from 'enzyme';
import React, { useEffect } from 'react';
import DeleteMovieSection from '../components/main/movie/delete/DeleteModal';
import renderer from 'react-test-renderer';
import * as redux from "react-redux";

describe('DeleteModals',() => {
    test('shallow renders app component', () => {
        const useDispatchSpy = jest.spyOn(redux, 'useDispatch'); 
        const mockDispatchFn = jest.fn()
        useDispatchSpy.mockReturnValue(mockDispatchFn);

        const deletetMovieSection = renderer.create(<DeleteMovieSection 
            movieId={1}
            isShow={true}
            closeEvent={jest.fn()}
        />)
        .toJSON();
        
        expect(deletetMovieSection).toMatchSnapshot();
    });
});

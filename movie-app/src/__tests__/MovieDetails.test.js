import { shallow } from 'enzyme';
import React from 'react';
import MovieDetails from '../components/header/Header';

test('shallow renders app component', () => {
    shallow(<MovieDetails />);
});

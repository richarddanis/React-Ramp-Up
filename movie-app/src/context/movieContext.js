import React from 'react';

const movieContext = React.createContext({
    movies: [],
    categories: [],
    detailsEvent: () => {},
    movieDetail: {}
});

export default movieContext;
import React from 'react';

const movieContext = React.createContext({
    movies: [],
    categories: [],
    detailsEvent: () => {},
    deleteEvent: () => {},
    editEvent: () => {}
});

export default movieContext;
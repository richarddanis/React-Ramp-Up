import React from 'react';

const movieContext = React.createContext({
    movies: [],
    categories: [],
    deleteEvent: () => {},
    editEvent: () => {}
});

export default movieContext;
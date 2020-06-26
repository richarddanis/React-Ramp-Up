import MovieContext from '../context/movieContext';
import React from 'react';

class MovieProvider extends React.Component{

    state = {
        movies: [
            {
                id: 'a1b1',
                title: 'Avangers',
                releaseYear: 2020,
                category: 'Action',
                img: "https://static.posters.cz/image/750/ueveg-keretes-plakat-avengers-infinity-war-o" +
                    "ne-sheet-i69678.jpg"
            },
            {
                id: 'a1b2',
                title: 'Avangers 3',
                releaseYear: 20321,
                category: 'Crime',
                img: "https://static.posters.cz/image/750/ueveg-keretes-plakat-avengers-infinity-war-o" +
                    "ne-sheet-i69678.jpg"
            }
        ],
        categories: [
            'All',
            'Action',
            'Documentary',
            'Comedy',
            'Horror',
            'Crime'
        ]
    }
    
    render(){
        return (
            <MovieContext.Provider value={{
                movies: this.state.movies,
                categories: this.state.categories
            }}>
                {this.props.children}
            </MovieContext.Provider>
        );
    }
}

export default MovieProvider;
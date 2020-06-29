import MovieContext from '../context/movieContext';
import React, {useState} from 'react';

function AppProvider() {

    const [movies, setMovies] = useState([
        {
            id: 'a1b1',
            title: 'Avangers',
            releaseYear: 2020,
            category: 'Action',
            img: "https://static.posters.cz/image/750/ueveg-keretes-plakat-avengers-infinity-war-o" +
                    "ne-sheet-i69678.jpg"
        }, {
            id: 'a1b2',
            title: 'Avangers 3',
            releaseYear: 20321,
            category: 'Crime',
            img: "https://static.posters.cz/image/750/ueveg-keretes-plakat-avengers-infinity-war-o" +
                    "ne-sheet-i69678.jpg"
        }
    ]);

    const [categories, setCategories] = useState([
        'All',
        'Action',
        'Documentary',
        'Comedy',
        'Horror',
        'Crime'
    ])

    const showDetails = (id) => {
        return console.log(id);
    }

    return (
        <MovieContext.Provider
            value={{
            movies: movies,
            categories: categories,
            detailsEvent: showDetails
        }}>
            {this.props.children}
        </MovieContext.Provider>
    )
}

export default AppProvider;
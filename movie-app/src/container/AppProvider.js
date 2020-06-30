import MovieContext from '../context/movieContext';
import React, {useState, useCallback, useEffect} from 'react';

const mockMovies = [
    {
        id: 'a1b1',
        title: 'Avangers',
        releaseYear: 2020,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus molestie odio ut tincidunt. Ut elit massa, fringilla a nisi ut, lacinia ultrices arcu. Duis ultricies, mauris sed sollicitudin eleifend, ex risus auctor nisi, ut consequat tortor lacus id augue. Pellentesque vulputate ultricies lacus in hendrerit. Duis quis dictum tortor, ac lacinia arcu. Sed ac ex id urna tempor mollis. Quisque lectus sapien, condimentum eu lorem vitae, cursus convallis nulla.            ',
        category: 'Action',
        img: "https://static.posters.cz/image/750/ueveg-keretes-plakat-avengers-infinity-war-o" +
                "ne-sheet-i69678.jpg"
    }, {
        id: 'a1b2',
        title: 'Avangers 3',
        releaseYear: 20321,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus molestie odio ut tincidunt. Ut elit massa, fringilla a nisi ut, lacinia ultrices arcu. Duis ultricies, mauris sed sollicitudin eleifend, ex risus auctor nisi, ut consequat tortor lacus id augue. Pellentesque vulputate ultricies lacus in hendrerit. Duis quis dictum tortor, ac lacinia arcu. Sed ac ex id urna tempor mollis. Quisque lectus sapien, condimentum eu lorem vitae, cursus convallis nulla.            ',
        category: 'Crime',
        img: "https://static.posters.cz/image/750/ueveg-keretes-plakat-avengers-infinity-war-o" +
                "ne-sheet-i69678.jpg"
    }
]

function AppProvider(props) {

    const [movies, setMovies] = useState([]);

    const [categories, setCategories] = useState([
        'All',
        'Action',
        'Documentary',
        'Comedy',
        'Horror',
        'Crime'
    ])

    useEffect(() => {setMovies(mockMovies)}, [])

    const [details, setDetails] = useState()

    const showDetails = useCallback( 
        index => {return setDetails(movies.filter(movie => movie.id === index).shift());}
            ,[movies]
    );

    return (
        <MovieContext.Provider
            value={{
            movies: movies,
            categories: categories,
            movieDetail: details,
            detailsEvent: showDetails
        }}>
            {console.log(details)}
            {props.children}
        </MovieContext.Provider>
    )
}

export default AppProvider;
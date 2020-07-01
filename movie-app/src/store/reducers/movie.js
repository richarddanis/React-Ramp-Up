import * as actionType from '../actions';

const initialState = {
    movies: [
        {
            id: 'a1b1',
            title: 'Avangers',
            releaseYear: 2020,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus molestie odi' +
                    'o ut tincidunt. Ut elit massa, fringilla a nisi ut, lacinia ultrices arcu. Duis ' +
                    'ultricies, mauris sed sollicitudin eleifend, ex risus auctor nisi, ut consequat ' +
                    'tortor lacus id augue. Pellentesque vulputate ultricies lacus in hendrerit. Duis' +
                    ' quis dictum tortor, ac lacinia arcu. Sed ac ex id urna tempor mollis. Quisque l' +
                    'ectus sapien, condimentum eu lorem vitae, cursus convallis nulla.            ',
            category: 'Action',
            img: "https://static.posters.cz/image/750/ueveg-keretes-plakat-avengers-infinity-war-o" +
                    "ne-sheet-i69678.jpg"
        }, {
            id: 'a1b2',
            title: 'Avangers 3',
            releaseYear: 20321,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus molestie odi' +
                    'o ut tincidunt. Ut elit massa, fringilla a nisi ut, lacinia ultrices arcu. Duis ' +
                    'ultricies, mauris sed sollicitudin eleifend, ex risus auctor nisi, ut consequat ' +
                    'tortor lacus id augue. Pellentesque vulputate ultricies lacus in hendrerit. Duis' +
                    ' quis dictum tortor, ac lacinia arcu. Sed ac ex id urna tempor mollis. Quisque l' +
                    'ectus sapien, condimentum eu lorem vitae, cursus convallis nulla.            ',
            category: 'Crime',
            img: "https://static.posters.cz/image/750/ueveg-keretes-plakat-avengers-infinity-war-o" +
                    "ne-sheet-i69678.jpg"
        }
    ]
}

const movie = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionType.FILTER:
            console.log('FILTER');
            return {
                ...state,
                movies: state.movies
            }
        case actionType.SORT:
            console.log('SORT');
            return {
                ...state,
                movies: state.movies
            }
    }
    return state;
}

export default movie;
import React from 'react';
import Footer from "./components/footer/Footer";
import {HeaderFacade} from "./components/header/HeaderFacade";
import MovieSection from "./components/main/movie/MovieSection";

class App extends React.Component {

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

    deleteMovieHandler = (event, movieId) => {
        console.log('delete');
    }

    editMovieHandler = (event, movieId) => {
        console.log('edit');
    }

    render() {
        console.log(this.state);
        return (
            <div className="uk-container-expand">
                <HeaderFacade/>
                <div
                    className="uk-container-expand uk-padding uk-panel"
                    style={{
                    backgroundColor: '#232323'
                }}>
                   <MovieSection 
                   movies={this.state.movies} 
                   categories={this.state.categories} 
                   deleteEvent= {this.deleteMovieHandler}
                   editEvent={this.editMovieHandler}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;

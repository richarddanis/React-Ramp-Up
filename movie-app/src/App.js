import React from 'react';
import Footer from "./components/footer/Footer";
import {HeaderFacade} from "./components/header/HeaderFacade";
import MovieSectionFacade from "./components/main/movie/MovieSectionFacade";

class App extends React.Component {

    state = {
        movies: [
            {
                id: 123,
                title: 'Avangers',
                releaseYear: 2020,
                category: 'Action',
                img: "https://static.posters.cz/image/750/ueveg-keretes-plakat-avengers-infinity-war-one-sheet-i69678.jpg"
            }
        ],
        categories: ['All','Action','Documentary','Comedy','Horror','Crime']
    }

    render() {
        console.log('App state:');
        console.log(this.state);
        return (
            <React.StrictMode>
                <div className="uk-container-expand">
                    <HeaderFacade/>
                    <MovieSectionFacade movies={this.state.movies} categories={this.state.categories}/>
                    <Footer/>
                </div>
            </React.StrictMode>
        );
    }
}

export default App;

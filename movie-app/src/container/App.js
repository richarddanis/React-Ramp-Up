import React from 'react';
import Footer from "../components/footer/Footer";
import {HeaderFacade} from "../components/header/HeaderFacade";
import MovieSection from "../components/main/movie/MovieSection";
import MovieProvider from "./MovieProvider";

class App extends React.Component {

    render() {

        return (
            <MovieProvider>
                <div className="uk-container-expand">
                    <HeaderFacade/>
                    <MovieSection/>
                    <Footer/>
                </div>
            </MovieProvider>
        );
    }
}

export default App;

import React from 'react';
import Footer from "../components/footer/Footer";
import HeaderFacade from "../components/header/HeaderFacade";
import {MovieSection} from "../components/main/movie/MovieSection";
import MovieForm from "../components/form/MovieForm";
import "../style/index.css";

class App extends React.Component {

    render() {
        return (
                <div className="uk-container-expand">
                    <HeaderFacade/>
                    <MovieForm/>
                    <MovieSection/>
                    <Footer/>
                </div>
        );
    }
}

export default App;

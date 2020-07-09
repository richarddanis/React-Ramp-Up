import React from 'react';
import Footer from "../components/footer/Footer";
import HeaderFacade from "../components/header/HeaderFacade";
import MovieForm from "../components/form/MovieForm";
import MovieSection from "../components/main/movie/MovieSection";
import "../style/index.css";

const App = () => {
        return (
                <div className="uk-container-expand">
                    <HeaderFacade/>
                    <MovieForm/>
                    <MovieSection/>
                    <Footer/>
                </div>
        );
}

export default App;

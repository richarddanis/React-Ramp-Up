import React from 'react';
import Footer from "../components/footer/Footer";
import HeaderFacade from "../components/header/HeaderFacade";
import {MovieSection} from "../components/main/movie/MovieSection";

class App extends React.Component {

    render() {
        return (
                <div className="uk-container-expand">
                    <HeaderFacade/>
                    <MovieSection/>
                    <Footer/>
                </div>
        );
    }
}

export default App;

import React from 'react';
import Footer from "./components/footer/Footer";
import {HeaderFacade} from "./components/header/HeaderFacade";
import {MovieSectionFacade} from "./components/main/movie/MovieSectionFacade";

class App extends React.Component {
    render() {
        return (
            <React.StrictMode>
                <div className="uk-container-expand">
                    <HeaderFacade/>
                    <MovieSectionFacade/>
                    <Footer/>
                </div>
            </React.StrictMode>
        );
    }
}

export default App;

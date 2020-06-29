import React from 'react';
import Footer from "../components/footer/Footer";
import HeaderFacade from "../components/header/HeaderFacade";
import MovieSection from "../components/main/movie/MovieSection";
import AppProvider from "./AppProvider";

class App extends React.Component {

    render() {
        return (
            <AppProvider>
                <div className="uk-container-expand">
                    <HeaderFacade/>
                    <MovieSection/>
                    <Footer/>
                </div>
            </AppProvider>
        );
    }
}

export default App;

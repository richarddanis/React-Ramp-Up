import React from 'react';
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MovieForm from "../components/form/MovieForm";
import MovieSection from "../components/main/movie/MovieSection";
import "../style/index.css";
import MovieDetails from './../components/header/details/MovieDetails';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <div className="uk-container-expand">
                        <Switch>
                            <Route path="/" exact>
                                <Header/>
                            </Route>
                            <Route path="/film/:id">
                                <MovieDetails/>
                            </Route>
                        </Switch>
                        <MovieForm/>
                        <MovieSection/>
                        <Footer/>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

import React from 'react';
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MovieForm from "../components/form/MovieForm";
import MovieSection from "../components/main/movie/MovieSection";
import "../style/index.css";
import MovieDetails from './../components/header/details/MovieDetails';
import {Switch, Route, Redirect} from 'react-router-dom';

const App = () => {
    return ( <> <Switch>
            <div className="uk-container-expand">
                <Switch>
                    <Route exact path="/film/:id">
                        <MovieDetails/>
                    </Route>
                    <Route exact path="/" >
                        <Header/>
                    </Route>
                    <Redirect to='/not-found'/>
                </Switch>
            </div>
    </Switch> < MovieForm /> <MovieSection/> < Footer /> </>);
}

export default App;

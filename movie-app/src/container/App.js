import React, {useEffect} from 'react';
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MovieForm from "../components/form/MovieForm";
import MovieSection from "../components/main/movie/MovieSection";
import "../style/index.css";
import MovieDetails from './../components/header/details/MovieDetails';
import {Switch, Route, Redirect, useLocation} from 'react-router-dom';

const App = (props) => {
    
    console.log(props);
    const location = useLocation();
    useEffect(() => {
        console.log('Location changed');
    }, [location]);

    return ( <> <div className="uk-container-expand">
        <Switch>
            <Switch>
                <Route exact path={['', "/"]}>
                    <Header/>
                </Route>
                <Route exact path="/film/:id" >
                    <MovieDetails/>
                </Route>
                <Redirect to='/not-found'/>
            </Switch>
        </Switch>
        < MovieForm/>
        <MovieSection/>
        < Footer/>
    </div> </>);
}

export default App;
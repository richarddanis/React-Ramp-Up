import React from "react";
import ImageDB from "../../assets/header-image.jpg"
import AddNewMovie from "./populator/AddNewMovie";
import SearchBar from "./search/SearchBar";
import NetflixRouletteName from "../util/NetflixRouletteName";
import MovieDetail from "./details/MovieDetails";
import {useSelector, shallowEqual} from 'react-redux';

function SearchHeader(){
    return (
        <div className="uk-container-expand uk-padding uk-panel" style={{backgroundImage: `url(${ImageDB})`}}>
            <div className="uk-grid-small uk-child-width-expand@s" data-uk-grid>
                <NetflixRouletteName/>
                <AddNewMovie/>
            </div>
            <h1 className="uk-text-uppercase uk-padding uk-padding-remove-bottom color-white">FIND YOUR MOVE</h1>
            <SearchBar/>
        </div>
    );
}

function HeaderFacade() {
    const movieDetails = useSelector(state => state.detailsReducer.details, shallowEqual);
    
    return (
        <div>
            {movieDetails.id? <MovieDetail movie={movieDetails}/> : <SearchHeader />}
        </div>);
}

export default HeaderFacade;
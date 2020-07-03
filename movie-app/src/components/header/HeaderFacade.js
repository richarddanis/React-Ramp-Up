import React from "react";
import ImageDB from "../../assets/header-image.jpg"
import AddNewMovie from "./populator/AddNewMovie";
import SearchBar from "./search/SearchBar";
import NetflixRouletteName from "../util/NetflixRouletteName";
import Card from "../util/Card";
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import * as actionType from '../../store/actions/actions'


function SearchHeader(){
    return (
        <div className="uk-container-expand uk-padding uk-panel" style={{backgroundImage: `url(${ImageDB})`}}>
        <div className="uk-grid-small uk-child-width-expand@s" data-uk-grid>
            <NetflixRouletteName/>
            <AddNewMovie/>
        </div>
        <div>
            <h1 className="uk-text-uppercase uk-padding uk-padding-remove-bottom" style={{color: "white"}}>FIND YOUR MOVE</h1>
        </div>
        <SearchBar/>
    </div>
    );
}

function MovieDetail({movie}){
    const dispatch = useDispatch();

    function onDeleteMovieDetails(){
        dispatch(actionType.deleteMovieDetails());
    }
    return(
        <div className="uk-container-expand uk-panel" >
            <Card closeEvent={onDeleteMovieDetails}> {/*detailsEvent(null) */}
                 <div className="uk-grid-small uk-child-width-expand@s" data-uk-grid>
                    <NetflixRouletteName/>
                </div>
                    <div className="uk-grid-small uk-child-width-expand@s" data-uk-grid>
                        <div className="uk-card-media-left uk-cover-container">
                            <img src={`${movie.poster_path}`} alt="" data-uk-cover/>
                            <canvas width="" height=""></canvas>
                        </div>
                        <div className="uk-card-body" style={{color: 'white'}}>
                            <h3 style={{color:'white'}} className="uk-card-title">{[`${movie.title}`,`${movie.vote_average}`].join(' ')}</h3>
                            <p>{movie.genres.map(genre => genre).join(' & ')}</p>
                            <span style={{color: '#F65261'}}>{movie.release_date}</span>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
            </Card>
        </div>
    );
}

function HeaderFacade() {
    const movieDetails = useSelector(state => state.detailsReducer.details, shallowEqual);
        return (
            <div>
            {movieDetails.id? <MovieDetail movie={movieDetails}/> : <SearchHeader />}
            </div>
        );
}

export default HeaderFacade;
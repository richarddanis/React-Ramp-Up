import React from "react";
import ImageDB from "../../assets/header-image.jpg"
import AddNewMovie from "./populator/AddNewMovie";
import SearchBar from "./search/SearchBar";
import NetflixRouletteName from "../util/NetflixRouletteName";
import MovieContext from "../../context/movieContext";
import Card from "../util/Card";

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

function MovieDetail({movie, detailsEvent}){
    return(
        <div className="uk-container-expand uk-panel">
            <Card closeEvent={() => detailsEvent(null)}>
                 <div className="uk-grid-small uk-child-width-expand@s" data-uk-grid>
                    <NetflixRouletteName/>
                </div>
                <div>
                {movie.title}
                </div>
            </Card>
        </div>
    );
}

function HeaderFacade() {
        return (
            <MovieContext.Consumer>
                {(context) =>
                    context.movieDetail?.id ? <MovieDetail movie={context.movieDetail} detailsEvent={context.detailsEvent}/> : <SearchHeader/>
                }
            </MovieContext.Consumer>
        );
}

export default HeaderFacade;
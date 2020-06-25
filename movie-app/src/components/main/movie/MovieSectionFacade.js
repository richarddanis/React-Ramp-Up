import React from "react";
import FilterableMovie from "./filter/FilterableMovie";
import SortableMovie from "./sort/SortableMovie";
import MovieListFacade from "./list/MovieListFacade";
import PropTypes from "prop-types";


const MovieSectionFacade = (props) => {
    console.log('Movies section');
    console.table(props);
    console.log(props.movies);
    console.log(props.categories);

    return (
        <div
        className="uk-container-expand uk-padding uk-panel"
        style={{
        backgroundColor: '#232323' }}>
            <div className="uk-child-width-expand" data-uk-grid>
            <FilterableMovie/>
            <SortableMovie/>
            </div>
            <hr/>
        <MovieListFacade movies = {props.movies}/>
    </div>
    )
}

MovieSectionFacade.propTypes = {
    movies: PropTypes.array
};


export default MovieSectionFacade;
import React, {useEffect} from "react";
import MovieCard from "./list/MovieCard";
import {useSelector, useDispatch} from 'react-redux';
import * as actionType from '../../../store/actions/actions'
import SortAndFilterSection from "./sortablefilterable/SortAndFilterSection";

function MovieNumber({moviesAmount}) {
    return (
        <div>
            <p className="uk-text-muted">
                <span className="uk-text-bold">{moviesAmount}</span>movies found
            </p>
        </div>
    );
}

export const MovieSection = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies);

    const movieDetailsAction = (movieId) =>{
        dispatch(actionType.handleMovieDetailsLoad(movieId));
    }

    useEffect(() => {
        dispatch(actionType.fetchMovies())
        console.log("called");
    }, [dispatch]);

    return (
        <div className="uk-container-expand uk-padding uk-panel background-color-grey">
            <SortAndFilterSection/>
            <hr/>
            <MovieNumber moviesAmount={movies.totalAmount}/>
            <div className="uk-child-width-1-3@m" data-uk-grid>
                {movies.movies.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie} detailsEvent={movieDetailsAction}/>
                })}
            </div>
        </div>
    )
}

export default MovieSection;
import React, {useEffect} from "react";
import MovieCard from "./list/MovieCard";
import {useSelector, useDispatch} from 'react-redux';
import * as actionType from '../../../store/actions/actions'
import SortAndFilterSection from "./sortablefilterable/SortAndFilterSection";
import movie from "../../../store/reducers/movie";

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
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const movieDetailsAction = (movieId) =>{
        dispatch(actionType.movieDetails(movieId));
    }

    useEffect(() => {
        dispatch(actionType.fetchMovies())
    }, [dispatch]);

    console.log(movies);
    return (
        <div className="uk-container-expand uk-padding uk-panel" style={{backgroundColor: '#232323'}}>
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

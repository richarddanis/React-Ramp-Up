import React, {useEffect} from "react";
import SortableMovie from "./sort/SortableMovie";
import MovieCard from "./list/MovieCard";
import FilterButton from "./filter/FilterButton";
import {useSelector, useDispatch} from 'react-redux';
import * as actionType from '../../../store/actions/actions'

const genres = [
    {
        id: 'b1',
        title: 'All',
        value: ''
    }, {
        id: 'b2',
        title: 'Action',
        value: 'Action'
    }, {
        id: 'b3',
        title: 'Documentary',
        value: 'Documentary'
    }, {
        id: 'b4',
        title: 'Comedy',
        value: 'Comedy'
    }, {
        id: 'b5',
        title: 'Horror',
        value: 'Horror'
    }, {
        id: 'b6',
        title: 'Crime',
        value: 'Crime'
    }
]

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

    const sortAction = (value) => {
        const queryParam = '?sortOrder=ASC&sortBy=' + value;
        dispatch(actionType.fetchMovies(queryParam))
    }

    const filterAction = (value) => {
        const queryParam = '?filter=' + value;
        dispatch(actionType.fetchMovies(queryParam));
    }

    const movieDetailsAction = (movieId) =>{
        dispatch(actionType.movieDetails(movieId));
    }

    useEffect(() => {
        dispatch(actionType.fetchMovies())
    }, [dispatch]);

    return (
        <div
            className="uk-container-expand uk-padding uk-panel"
            style={{
            backgroundColor: '#232323'
        }}>
            <div className="uk-child-width-expand" data-uk-grid>
                <div className="uk-button-group">
                    {genres.map((category) => {
                        return <FilterButton
                            key={category.id}
                            title={category.title}
                            filterAction={() => filterAction(category.value)}/>
                    })}
                </div>
                <SortableMovie sortAction={sortAction}/>
            </div>
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

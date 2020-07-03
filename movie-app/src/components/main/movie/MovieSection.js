import React, {useEffect} from "react";
import SortableMovie from "./sort/SortableMovie";
import MovieCard from "./list/MovieCard";
import FilterButton from "./filter/FilterButton";
import {useSelector, useDispatch} from 'react-redux';
import initMovies, * as actionType from '../../../store/actions/actions'

const genres = [
    {
        id: 'b1',
        title: 'All'
    },
    {
        id: 'b2',
        title: 'Action'
    },
    {
        id: 'b3',
        title: 'Documentary'
    },
    {
        id: 'b4',
        title: 'Comedy'
    },
    {
        id: 'b5',
        title: 'Horror'
    },
    {
        id: 'b6',
        title: 'Crime'
    }
]

function MovieNumber({movieLength}) {
    return (
        <div>
            <p style={{
                color: 'white'
            }}>
                <span style={{
                    fontWeight: 'bold'
                }}>{movieLength}
                </span>
                movies found
            </p>
        </div>
    );
}


export const MovieSection = () => {
    const movies = useSelector(state => state.movies.movies);
    const dispatch = useDispatch();

    const sortAction = (type) => {
        'sortBy';
        dispatch({type: actionType.SORT_MOVIE})
    }

    const filterAction = (id) => {
        'filter'
        dispatch({type: actionType.FILTER_MOVIE})
    }

    useEffect(() => {
        console.log('Called')
        dispatch(initMovies())
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
                                return <FilterButton key={category.id} title={category.title} filterAction= {() => filterAction(category.id)}/>
                            })}
                        </div>
                    <SortableMovie sortAction={sortAction}/>
                </div>
                <hr/>
                    <MovieNumber movieLength={movies.length}/>
                    <div className="uk-child-width-1-3@m" data-uk-grid>
                        {movies.map((movie) => {
                            return <MovieCard key={movie.id} movie={movie} detailsEvent={null}/>
                        })}
                    </div>
        </div>
    )
}

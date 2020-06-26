import React from "react";
import SortableMovie from "./sort/SortableMovie";
import PropTypes from "prop-types";
import MovieCard from "./list/MovieCard";
import FilterButton from "./filter/FilterButton";

function AddMovieNumber({movieLength}) {
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

function MovieSection({movies, categories, deleteEvent, editEvent}) {
    return (
        <div>
            <div className="uk-child-width-expand" data-uk-grid>
                <div>
                    <div className="uk-button-group">
                        {categories.map((category) => {
                            return <FilterButton category={category}/>
                        })}
                    </div>
                </div>
                <SortableMovie/>
            </div>
            <hr/>
            <div>
                <AddMovieNumber movieLength={movies.length}/>
                <div className="uk-child-width-1-3@m" data-uk-grid>
                    {movies.map((movie) => {
                        return <MovieCard movie={movie} deleteEvent={deleteEvent} editEvent={editEvent}/>
                    })}
                </div>
            </div>
        </div>
    )
}

MovieSection.propTypes = {
    movies: PropTypes.array,
    categories: PropTypes.array
}

AddMovieNumber.prototype ={
    movieLength: PropTypes.number
}

export default MovieSection;
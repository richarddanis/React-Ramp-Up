import React from "react";
import SortableMovie from "./sort/SortableMovie";
import MovieCard from "./list/MovieCard";
import FilterButton from "./filter/FilterButton";
import MovieContext from "../../../context/movieContext";

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

function MovieSection() {
    return (
        <div className="uk-container-expand uk-padding uk-panel"
        style={{
        backgroundColor: '#232323'}}>
            <MovieContext.Consumer>
                {(context) => 
                        <div>
                            <div className="uk-child-width-expand" data-uk-grid>
                                <div>
                                    <div className="uk-button-group">
                                        {context
                                            .categories
                                            .map((category) => {
                                                return <FilterButton category={category}/>
                                            })}
                                    </div>
                                </div>
                                <SortableMovie/>
                            </div>
                            <hr/>
                            <div>
                                <AddMovieNumber movieLength={context.movies.length}/>
                                <div className="uk-child-width-1-3@m" data-uk-grid>
                                    {context
                                        .movies
                                        .map((movie) => {
                                            return <MovieCard
                                                movie={movie}/>
                                        })}
                                </div>
                            </div>
                        </div>
                
            }
            </MovieContext.Consumer>
        </div>
    )
}

export default MovieSection;
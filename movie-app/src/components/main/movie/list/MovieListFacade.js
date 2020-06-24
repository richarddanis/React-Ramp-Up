import React from "react";
import {MovieCards} from "../../../../__mocks__/movie_card_mock.js"
import {MissingMoviesErrorBoundary} from "../../../error/MissingMoviesErrorBoundary";

function RenderCards() {
    return (
        MovieCards.map((movie) =>
            (
                <div key={movie.id}>
                    <div className="uk-card uk-card-default"
                         style={{backgroundColor: 'transparent', color: '#FFFFFF'}}>
                        <div className="uk-card-media-top">
                            <img src={`${movie.img}`} alt=""/>
                            <div className="uk-card-badge">
                                <button className="uk-button" style={{backgroundColor: 'transparent'}}>
                                    Edit
                                </button>
                            </div>
                        </div>
                        <div className="uk-card-body">
                            <div className="uk-child-width-expand" data-uk-grid>
                                <h3 className="uk-card-title" style={{color: '#FFFFFF'}}>
                                    {movie.title}
                                </h3>
                                <span>
                                    {movie.releaseYear}
                                </span>
                            </div>
                            <p>{movie.category}</p>
                        </div>
                    </div>
                </div>
            )
        )
    );
}

export class MovieListFacade extends React.Component {
    render() {
        return (
            <div>
                <p style={{color: 'white'}}>
                    <span style={{fontWeight: 'bold'}}>X</span> movies found
                </p>
                <div className="uk-child-width-1-3@m" data-uk-grid>
                    <MissingMoviesErrorBoundary>
                        <RenderCards/>
                    </MissingMoviesErrorBoundary>
                </div>
            </div>
        );
    }
}


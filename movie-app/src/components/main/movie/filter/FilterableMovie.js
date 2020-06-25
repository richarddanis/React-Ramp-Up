import React from "react";
import {MissingMoviesErrorBoundary} from "../../../error/MissingMoviesErrorBoundary";
import PropTypes from "prop-types";

const CategoryButton = () => (
    Object.entries(null).map(([key, value]) => (
        <div key={value}>
            <button className="uk-button" onClick={() => console.log('Clicked button is: ' + key)}
                    style={{backgroundColor: "transparent"}}>
                <span style={{color: "white"}}>{value}</span>
            </button>
        </div>)
    )
)

export default function FilterableMovie(movieCategories) {
    return (
        <div>
            <MissingMoviesErrorBoundary>
                <div className="uk-button-group">
                </div>
            </MissingMoviesErrorBoundary>
        </div>
    );
}

FilterableMovie.propTypes = {
    movieCategories: PropTypes.array
};

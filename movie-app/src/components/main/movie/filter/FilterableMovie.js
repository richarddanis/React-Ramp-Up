import React from "react";
import {MovieCategories} from "../../../../__mocks__/movie_card_mock";
import {ErrorBoundary} from "../../../error/ErrorBoundary";

const CategoryButton = () => (
    Object.entries(MovieCategories).map(([key, value]) => (
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
            <ErrorBoundary>
                <div className="uk-button-group">
                    <CategoryButton movieCategories={movieCategories}/>
                </div>
            </ErrorBoundary>
        </div>
    );
}
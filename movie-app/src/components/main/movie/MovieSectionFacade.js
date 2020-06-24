import React from "react";
import {MovieListFacade} from "./list/MovieListFacade";
import FilterableMovie from "./filter/FilterableMovie";
import SortableMovie from "./sort/SortableMovie";

export class MovieSectionFacade extends React.Component {
    render() {
        return (
            <div className="uk-container-expand uk-padding uk-panel" style={{backgroundColor: '#232323'}}>
                <div className="uk-child-width-expand" data-uk-grid>
                    <FilterableMovie/>
                    <SortableMovie/>
                </div>
                <hr/>
                <MovieListFacade/>
            </div>
        );
    }
}
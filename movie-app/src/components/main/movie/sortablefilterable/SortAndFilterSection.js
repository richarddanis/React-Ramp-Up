import React from "react";
import SortableMovie from "./sort/SortableMovie";
import FilterButton from "./filter/FilterButton";
import { useDispatch} from 'react-redux';
import * as actionType from '../../../../store/actions/actions'
import {genres} from "../../../util/genres";

const SortAndFilterSection = () => {
    const dispatch = useDispatch();

    const sortAction = (value) => {
        const queryParam = '?sortOrder=ASC&sortBy=' + value;
        dispatch(actionType.fetchMovies(queryParam))
    }

    const filterAction = (value) => {
        const queryParam = '?filter=' + value;
        dispatch(actionType.fetchMovies(queryParam));
    }

    return(
        <div className="uk-child-width-expand" data-uk-grid>
            <div className="uk-button-group">
                {genres.map((category) => {
                    return <FilterButton
                        key={category.id}
                        title={category.title}
                        filterAction={() => filterAction(category.value)}/>})}
            </div>
        <SortableMovie sortAction={sortAction}/>
        </div>
    )
}

export default SortAndFilterSection;
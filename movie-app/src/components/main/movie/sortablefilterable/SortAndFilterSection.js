import React from "react";
import SortableMovie from "./sort/SortableMovie";
import FilterButton from "./filter/FilterButton";
import { useDispatch} from 'react-redux';
import * as actionType from '../../../../store/actions/actions'

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
import React from "react";
import HandlerButton from "../../util/HandlerButton";
import {useDispatch} from 'react-redux';
import * as actionType from '../../../store/actions/actions';

export default function AddNewMovie() {
    const dispatch = useDispatch();

    const showEditableMovieForm = () => {
        dispatch(actionType.handleShowMovieForm());
    }

    return (
        <div>
            <div className="uk-position-medium uk-position-right ">
                <HandlerButton eventName={() => showEditableMovieForm()}>
                    + ADD MOVIE
                </HandlerButton>
            </div>
        </div>
    );
}

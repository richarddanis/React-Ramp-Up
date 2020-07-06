import React, {useState} from "react";
import "../../../style/move-form.css";
import HandlerButton from "../../util/HandlerButton";
import {useDispatch} from 'react-redux';
import * as actionType from '../../../store/actions/actions';

export default function AddNewMovie() {
    const dispatch = useDispatch();

    const showEditableMovieForm = () => {
        dispatch(actionType.showMovieForm());
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

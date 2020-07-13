import React from "react";
import MovieFormFacade from "./MovieFormFacade";
import { Formik } from "formik";
import {useSelector, useDispatch} from 'react-redux';
import MovieFormFields from "./MovieFormFields";
import * as actionType from "./../../store/actions/actions";
import movieRegistrationSchema from "./constraints/MovieRegistrationSchema";

const MovieForm = () => {

    const dispatch = useDispatch();

    const movie = useSelector(state => state.movies.movie)
    const isEditableMovie = useSelector(state => state.movies.isEditableMovie)

    const title = isEditableMovie
        ? 'EDIT MOVIE'
        : 'ADD MOVIE';

    return (
        <MovieFormFacade>
            <Formik initialValues={{movie, title}} 
                validationSchema={movieRegistrationSchema}
                onSubmit={(values) => {dispatch(actionType.handleSaveEditFormMovie(values.movie));}}
                children = { props => <MovieFormFields {...props}/>}
            />
        </MovieFormFacade>
    );
}

export default MovieForm;
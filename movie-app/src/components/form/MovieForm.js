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
    
    const genreOptions = ["Action", "Comedy", "Etc"];

    return (
        <MovieFormFacade>
            <Formik initialValues={{movie, genreOptions, title}} 
            validationSchema={movieRegistrationSchema}
            onSubmit={(values, { setSubmitting }) => {
                            console.log('onSubmit: ',values.movie);
                            setSubmitting(false);
                            dispatch(actionType.handleSaveEditFormMovie(movie));
                        }}
            children = { props => <MovieFormFields {...props}/>}
                    />
        </MovieFormFacade>
    );
}

export default MovieForm;
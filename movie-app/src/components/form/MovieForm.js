import React from "react";
import TextInput from "./input";
import {useSelector} from 'react-redux';
import CenterCard from "../util/CenterCard";
import Card from "../util/Card";
import {useDispatch} from 'react-redux';
import * as actionType from '../../store/actions/actions';
import { Formik } from "formik";

interface Movie {
    title: String;
}

const MovieForm = () => {

    const dispatch = useDispatch();

    const movie = useSelector(state => state.movies.movie)
    const isShowForm = useSelector(state => state.movies.isShowModal)
    const isEditableMovie = useSelector(state => state.movies.isEditableMovie)

    const title = isEditableMovie
        ? 'EDIT MOVIE'
        : 'ADD MOVIE';

    const genreOptions = ["Action", "Comedy", "Etc"];

    function handleCloseEvent() {
        dispatch(actionType.handleCloseMovieForm());
    }

    function handleSubmit(e) {
        e.preventDefault();
        const movie = {
            id: isEditableMovie
                ? parseInt(e.target.id.value)
                : undefined,
            title: e.target.title.value,
            release_date: e.target.release.value,
            poster_path: e.target.movieurl.value,
            genres: [e.target.select.value],
            overview: e.target.overview.value,
            runtime: parseInt(e.target.runtime.value)
        }
        dispatch(actionType.handleSaveEditFormMovie(movie, isEditableMovie));
    }

    return (
        <div>{isShowForm && <> <CenterCard>
                <Card closeEvent={handleCloseEvent}>
                    <div className="uk-width-large ">
                        <Formik initialValues={{movie}}>
                                {({values, handleChange, handleSubmit, handleBlur}) => (
                                     <div className="uk-margin">
                                    <form onSubmit={handleSubmit}>
                                        <h3 style={{color: 'white'}} className="uk-card-title">{title}</h3>
                                        <textInput 
                                                name="movie.title"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.movie.title}
                                                /> 
                                        <div className="uk-button-group uk-margin uk-float-right">
                                            <div className="uk-padding-small">
                                                <button
                                                    className="uk-button uk-button-default uk-border-rounded"
                                                    style={{
                                                    backgroundColor: 'transparent',
                                                    borderColor: '#F65261',
                                                    color: '#F65261'
                                                }}
                                                    type="reset">
                                                    Reset
                                                </button>
                                            </div>
                                            <div className="uk-padding-small">
                                                <button
                                                    type="submit"
                                                    value="Submit"
                                                    className="uk-button uk-border-rounded color-salmon">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="uk-position-center-right-out">
                                        <pre>{JSON.stringify(values, null, 2)}</pre>
                                    </div>
                                    </div>
                                )}
                        </Formik>
                    </div>
                </Card>
            </CenterCard> </>}
        </div>
    );
}

export default MovieForm;
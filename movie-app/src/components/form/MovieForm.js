import React from "react";
import Input from "./input";
import Select from "./select";
import {useSelector} from 'react-redux';
import CenterCard from "../util/CenterCard";
import Card from "../util/Card";
import {useDispatch} from 'react-redux';
import * as actionType from '../../store/actions/actions';

function MovieForm() {

    const dispatch = useDispatch();

    const movie = useSelector(state => state.movies.movie)
    const isShowForm = useSelector(state => state.movies.isShowModal)
    const title = movie.id !== undefined ? 'EDIT MOVIE' : 'ADD MOVIE'

    const genreOptions = ["Action", "Comedy"];

    function handleCloseEvent(){
        dispatch(actionType.onCloseMovieForm());
    }

    function handleSubmit(e){
        e.preventDefault();
        const movie = {
                id: e.target.id.value,
                title: e.target.title.value,
                release_date: e.target.release.value,
                poster_path: e.target.movieurl.value,
                genres: [e.target.select.value],
                overview: e.target.overview.value,
                runtime: e.target.runtime.value
        }

        console.log(movie);
        dispatch(actionType.handleFormMovie(movie));
    }

    return (
         <div>{isShowForm && <>
        <CenterCard>
            <Card closeEvent={handleCloseEvent}>
                <div className="uk-width-large">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="uk-margin">
                            <h3
                                style={{
                                color: 'white'
                            }}
                                className="uk-card-title">{title}</h3>
                        {/* Movie Id*/}
                            {movie.id !== undefined  && <> <Input
                                title={"MOVIE ID"}
                                name={"id"}
                                type={"text"}
                                defaultValue={movie.id} 
                                data-disabled/> </>}
                        {/* Movie Title*/}
                            <Input
                                name={"title"}
                                type={"text"}
                                defaultValue={movie.title}
                                placeholder={'Title here'}
                                title={'TITLE'}/> 
                        {/* Release year */}
                            <Input
                                name={"release"}
                                type={"number"}
                                defaultValue={movie.release_date}
                                placeholder={'Release year here'}
                                title={'RELEASE DATE'}/>
                        {/* Movie year */}
                            <Input
                                name={"movieurl"}
                                type={"text"}
                                defaultValue={movie.poster_path}
                                placeholder={'Movie URL here...'}
                                title={'MOVIE URL'}/> 
                        {/* Genre option */}
                            <Select
                                options={genreOptions}
                                placeholder={"Select genre..."}
                                title={"GENRE"}
                                name={"genre"}/> 
                        {/* Overview */}
                            <Input
                                name={"overview"}
                                type={"text"}
                                defaultValue={movie.overview}
                                placeholder={'Overview here'}
                                title={'OVERVIEW'}/>
                        {/*Runtime */}
                            <Input
                                name={"runtime"}
                                type={"number"}
                                defaultValue={movie.runtime}
                                placeholder={'Runtime here...'}
                                title={'RUNTIME'}/>
                        
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
                                        className="uk-button uk-border-rounded">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Card>
        </CenterCard>
</>}
</div>
    );
}

export default MovieForm;
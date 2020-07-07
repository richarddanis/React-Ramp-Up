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

    const movie = useSelector(state => state.movieForm.movie)
    const isShowForm = useSelector(state => state.movieForm.isShowModal)
    const title = movie.id !== undefined ? 'EDIT MOVIE' : 'ADD MOVIE'

    const genreOptions = ["Action", "Comedy"];

    function handleCloseEvent(){
        dispatch(actionType.onCloseMovieForm());
    }

    function handleSubmit(e){
        e.preventDefault();
        const movie = {
                title: e.target.title.value,
                release_date: e.target.release.value,
                poster_path: e.target.movieurl.value,
                genres: [],
                overview: e.target.overview.value,
                runtime: e.target.runtime.value
        }
        console.log('Movie: ', movie);
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
                                name={"Id"}
                                type={"text"}
                                value={movie.id}
                                onChange={() => {
                                console.log('Title change')
                            }}/> </>}
                             {/* Movie Title*/}
                            <Input
                                name={"title"}
                                type={"text"}
                                value={movie.title}
                                onChange={() => {
                                console.log('Title change')
                            }}
                                placeholder={'Title here'}
                                title={'TITLE'}/> {/* Release year */}
                            <Input
                                name={"release"}
                                type={"number"}
                                value={movie.release_date}
                                onChange={() => {
                                console.log('Release year change')
                            }}
                                placeholder={'Release year here'}
                                title={'RELEASE DATE'}/> {/* Movie year */}
                            <Input
                                name={"movieurl"}
                                type={"text"}
                                value={movie.poster_path}
                                onChange={() => {
                                console.log('Movie year change')
                            }}
                                placeholder={'Movie URL here...'}
                                title={'MOVIE URL'}/> {/* Genre option */}
                            <Select
                                options={genreOptions}
                                placeholder={"Select genre..."}
                                title={"Genre"}
                                name={"genre"}/> {/* Overview */}
                            <Input
                                name={"overview"}
                                type={"text"}
                                value={movie.overview}
                                onChange={() => {
                                console.log('Overview change')
                            }}
                                placeholder={'Overview here'}
                                title={'OVERVIEW'}/> {/*Runtime */}
                            <Input
                                name={"runtime"}
                                type={"number"}
                                value={movie.runtime}
                                onChange={() => {
                                console.log('Runtime change')
                            }}
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
                                        onClick={(event) => {
                                        console.log('clicked')
                                    }}>
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
import React from "react";
import Input from "./input";
import Select from "./select";
import HandlerButton from "../util/HandlerButton";

function MovieForm({name, movieId, title}) {

    const genderOptions = ["Male", "Female"];

    return (
        <div>
            <form>
                <div className="uk-margin">
                    <h3
                        style={{
                        color: 'white'
                    }}
                className="uk-card-title">{title}</h3>
                    {/* Movie Id*/}
                    {movieId !== null && <Input
                        title={"MOVIE ID"}
                        name={"Id"}
                        value={movieId}
                        type={"text"}
                        onChange={() => {
                        console.log('Title change')
                        }}/>}
                    {/* Movie Title*/}
                    <Input
                        name={"title"}
                        type={"text"}
                        onChange={() => {
                        console.log('Title change')
                    }}
                        placeholder={'Title here'}
                        title={'TITLE'}/> {/* Release year */}
                    <Input
                        name={"release"}
                        type={"text"}
                        onChange={() => {
                        console.log('Release year change')
                    }}
                        placeholder={'Release year here'}
                        title={'RELEASE DATE'}/> {/* Movie year */}
                    <Input
                        name={"movieurl"}
                        type={"text"}
                        onChange={() => {
                        console.log('Movie year change')
                    }}
                        placeholder={'Movie URL here...'}
                        title={'MOVIE URL'}/> {/* Gender option */}
                    <Select
                        options={genderOptions}
                        placeholder={"Select gender..."}
                        title={"GENDER"}
                        name={"gender"}/> {/* Overview */}
                    <Input
                        name={"overview"}
                        type={"text"}
                        onChange={() => {
                        console.log('Overview change')
                    }}
                        placeholder={'Overview here'}
                        title={'OVERVIEW'}/> {/*Runtime */}
                    <Input
                        name={"runtime"}
                        type={"text"}
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
                            }}>
                                Reset
                            </button>
                        </div>
                        <div className="uk-padding-small">
                            <HandlerButton
                                style={{
                                backgroundColor: '#F65261',
                                color: 'white',
                                borderColor: 'transparent'
                            }}
                                name={name}
                                movieId={movieId}/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default MovieForm;
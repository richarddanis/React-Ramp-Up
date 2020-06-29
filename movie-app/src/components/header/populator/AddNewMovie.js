import React, {useState} from "react";
import "../../../style/move-form.css";
import Input from "../../form/input";
import Select from "../../form/select";

export default function AddNewMovie() {
    const [showMovieForm,
        setMoveFormVisibility] = useState(false);

    const genderOptions = ["Male", "Female"];

    return (
        <div>
            <div>
                <div className="uk-position-medium uk-position-right ">
                    <button
                        className="uk-button uk-border-rounded"
                        style={{
                        backgroundColor: 'transparent'
                    }}
                        onClick={() => setMoveFormVisibility(!showMovieForm)}>
                        <span
                            style={{
                            color: 'white'
                        }}>+ ADD MOVIE</span>
                    </button>
                </div>
            </div>

            {showMovieForm && <> <div className="uk-position-z-index uk-position-absolute">
                <div
                    className="uk-card-default uk-card-body uk-width-xlarge"
                    style={{
                    backgroundColor: '#232323'
                }}>
                    <form>
                        <div className="uk-margin">
                            <h3
                                style={{
                                color: 'white'
                            }}
                                className="uk-card-title">ADD NEW MOVIE</h3>
                            {/* Movie Title*/}
                            <Input
                                name={"title"}
                                type={"text"}
                                onChange={() => {
                                console.log('Title change')
                            }}
                                placeholder={'Title here'}
                                title={'TITLE'}/>
                            {/* Release year */}
                            <Input
                                name={"release"}
                                type={"text"}
                                onChange={() => {
                                console.log('Release year change')
                            }}
                                placeholder={'Release year here'}
                                title={'RELEASE DATE'}/>
                            {/* Movie year */}
                            <Input
                                name={"movieurl"}
                                type={"text"}
                                onChange={() => {
                                console.log('Movie year change')
                            }}
                                placeholder={'Movie URL here...'}
                                title={'MOVIE URL'}/>
                            {/* Gender option */}
                            <Select 
                                options={genderOptions}
                                placeholder={"Select gender..."}
                                title={"GENDER"}
                                name={"gender"}
                            />
                            {/* Overview */}
                            <Input
                                name={"overview"}
                                type={"text"}
                                onChange={() => {
                                console.log('Overview change')
                            }}
                                placeholder={'Overview here'}
                                title={'OVERVIEW'}/>
                            {/*Runtime */}
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
                                    <button
                                        className="uk-button uk-button-default uk-border-rounded"
                                        style={{
                                        backgroundColor: '#F65261',
                                        color: 'white',
                                        borderColor: 'transparent'
                                    }}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                            <div className="uk-card-badge">
                                <button
                                    onClick={() => setMoveFormVisibility(!showMovieForm)}
                                    className="uk-button uk-button-default uk-border-rounded"
                                    style={{
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    borderColor: 'transparent'
                                }}>
                                    X - close
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>}
        </div>
    );
}

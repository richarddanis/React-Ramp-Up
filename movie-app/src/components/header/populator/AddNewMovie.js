import React, {useState} from "react";
import "../../../style/move-form.css";

export default function AddNewMovie() {
    const [showMovieForm, setMoveFormVisibility] = useState(false);

    return (
        <div>
            <div>
                <div className="uk-position-medium uk-position-right ">
                    <button className="uk-button uk-border-rounded" style={{backgroundColor: 'transparent'}}
                            onClick={() => setMoveFormVisibility(!showMovieForm)}><span
                        style={{color: 'white'}}>+ ADD MOVIE</span></button>
                </div>
            </div>

            {showMovieForm &&
            <>
                <div className="uk-position-z-index uk-position-absolute">
                    <div className="uk-card-default uk-card-body uk-width-xlarge" style={{backgroundColor: '#232323'}}>
                        <form>
                            <div className="uk-margin">
                                <h3 style={{color: 'white'}} className="uk-card-title">ADD NEW MOVIE</h3>
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="form-stacked-text">
                                        <span>TITLE</span>
                                    </label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input" id="form-stacked-text" type="text"
                                               placeholder="Some text..."/>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-margin">
                                        <label className="uk-form-label" htmlFor="form-stacked-text">
                                            <span>RELEASE DATE</span>
                                        </label>
                                        <div className="uk-form-controls">
                                            <input className="uk-input" id="form-stacked-text" type="text"
                                                   placeholder="Movie URL here..."/>
                                        </div>
                                    </div>
                                    <label className="uk-form-label" htmlFor="form-stacked-text">
                                        <span>MOVIE URL</span>
                                    </label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input" id="form-stacked-text" type="text"
                                               placeholder="Movie URL here..."/>
                                    </div>
                                    <div className="uk-margin">
                                        <label className="uk-form-label" htmlFor="form-stacked-text">
                                            <span>GENRE</span>
                                        </label>
                                        <div>
                                            <div uk-form-custom="target: > * > span:first-child">
                                                <select>
                                                    <option value="">Please select...</option>
                                                    <option value="1">Option 01</option>
                                                    <option value="2">Option 02</option>
                                                </select>
                                                <button className="uk-button uk-button-default" type="button"
                                                        tabIndex="-1">
                                                    <span></span>
                                                    <span uk-icon="icon: chevron-down"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="uk-margin">
                                        <label className="uk-form-label" htmlFor="form-stacked-text">
                                            <span>OVERVIEW</span>
                                        </label>
                                        <div className="uk-form-controls">
                                            <input className="uk-input" id="form-stacked-text" type="text"
                                                   placeholder="Overview here"/>
                                        </div>
                                    </div>
                                    <div className="uk-margin">
                                        <label className="uk-form-label" htmlFor="form-stacked-text">
                                            <span>RUNTIME</span>
                                        </label>
                                        <div className="uk-form-controls">
                                            <input className="uk-input" id="form-stacked-text" type="text"
                                                   placeholder="Runtime here..."/>
                                        </div>
                                    </div>
                                    <div className="uk-button-group uk-margin uk-float-right">
                                        <div className="uk-padding-small">
                                            <button className="uk-button uk-button-default uk-border-rounded" style={{
                                                backgroundColor: 'transparent',
                                                borderColor: '#F65261',
                                                color: '#F65261'
                                            }}>
                                                Reset
                                            </button>
                                        </div>
                                        <div className="uk-padding-small">
                                            <button className="uk-button uk-button-default uk-border-rounded"
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
                                        <button onClick={() => setMoveFormVisibility(!showMovieForm)}
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
                            </div>
                        </form>
                    </div>
                </div>
            </>}
        </div>
    );
}

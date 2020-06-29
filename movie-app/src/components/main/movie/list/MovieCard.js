import React, {useState} from "react";
import HandlerButton from "../../../util/HandlerButton";
import Card from "../../../util/Card";

function EditSection({name, movieId}) {
    return (
        <div>
                <form>
                            <div className="uk-margin">
                                <h3 style={{color: 'white'}} className="uk-card-title">ADD NEW MOVIE</h3>
                                <label className="uk-form-label" htmlFor="form-stacked-text">
                                        <span>MOVIE ID</span>
                                    </label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input" id="form-stacked-text" type="text"
                                                placeholder="disabled" value={movieId} data-disabled/>
                                    </div>
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
                                            <HandlerButton style={{
                                                        backgroundColor: '#F65261',
                                                        color: 'white',
                                                        borderColor: 'transparent'
                                                    }}
                                                     name={name} movieId={movieId}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
           
        </div>
    );
}

function DeleteSection({movieId}) {
    return (
        <div>
            <h1>Delete movie</h1>
            <p>Are you sure want to delete the movie?</p>
            <HandlerButton name={'Confirm'} movieId={movieId}/>
        </div>
    )
}

function CardActions({name, movieId}) {
    const [showAction,
        setAction] = useState(false);
    return (
        <div> 
            <HandlerButton
                eventName={() => setAction(!showAction)}
                name={name}
                movieId={movieId}/> {showAction && <> <div
                style={{
                backgroundColor: '#0008',
                width: '100%',
                height: '100%',
                zIndex: 10,
                top: 0,
                left: 0,
                position: 'fixed'
            }}>
                <div className="uk-position-center">
                    <Card
                        showCard={showAction}
                        closeEvent={() => setAction(!showAction)}
                        id={movieId}>
                        {{
                            'Edit': <EditSection name={name} movieId={movieId}/>,
                            'Delete': <DeleteSection/>
                        }[name]}
                    </Card>
                </div>
            </div> </>}
        </div>
    );
}

function MovieCard({movie}) {
    const [showMovieActions,
        setMovieActionVisibility] = useState(false);
    
    return (
        <div key={movie.id}>
            <div
                className="uk-card uk-card-default"
                style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF'
            }}>
                <div className="uk-card-media-top">
                    <img src={`${movie.img}`} alt=""/>
                    <div className="uk-card-badge">
                        {!showMovieActions && <> <HandlerButton
                            eventName={() => setMovieActionVisibility(!showMovieActions)}
                            name={'...'}
                            movieId={movie.id}/> </>}
                        {showMovieActions && <> <div
                            className="uk-card uk-card-default"
                            style={{
                            backgroundColor: '#232323',
                            color: 'white'
                        }}>
                            <Card
                                showCard={showMovieActions}
                                closeEvent={() => setMovieActionVisibility(!showMovieActions)}
                                id={movie.id}>
                                <CardActions name={'Edit'} movieId={movie.id}/>
                                <CardActions name={'Delete'} movieId={movie.id}/>
                            </Card>
                        </div> </>}
                    </div>
                </div>
                <div className="uk-card-body">
                    <div className="uk-child-width-expand" data-uk-grid>
                        <h3
                            className="uk-card-title"
                            style={{
                            color: '#FFFFFF'
                        }}>
                            {movie.title}
                        </h3>
                        <span>
                            {movie.releaseYear}
                        </span>
                    </div>
                    <p>{movie.category}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;

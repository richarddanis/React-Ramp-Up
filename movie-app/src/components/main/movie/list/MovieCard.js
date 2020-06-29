import React, {useState} from "react";
import HandlerButton from "../../../util/HandlerButton";
import Card from "../../../util/Card";
import MovieForm from "../../../form/MovieForm";

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
                            'Edit': <MovieForm name={name} movieId={movieId} title={'EDIT MOVIE'}/>,
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

import React, {useState} from "react";
import HandlerButton from "../../../util/HandlerButton";
import Card from "../../../util/Card";
import {useDispatch} from 'react-redux';
import * as actionType from '../../../../store/actions/actions'

function CardActions({movie}) {
    const dispatch = useDispatch();

    const fetchEditableMovieForm = (movie) =>{
        dispatch(actionType.showMovieForm(movie));
    }

    const deleteModal = (movieId) => {
        console.log('clicked');
    }
    
    return (
        <div> 
            <button onClick={() => fetchEditableMovieForm(movie)}>Edit</button>
            <button onClick={() => deleteModal(movie.id)}>Delete</button>
        </div>
    );
}

function MovieCard({movie, detailsEvent}) {
    const [showMovieActions,
        setMovieActionVisibility] = useState(false);

    return (
        <div>
            <div
                className="uk-card uk-card-default"
                style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF'
            }}>
                <div className="uk-card-media-top">
                    <img src={`${movie.poster_path}`} alt=""/>
                    <div className="uk-card-badge">
                        {!showMovieActions && <> <HandlerButton
                            eventName={() => setMovieActionVisibility(!showMovieActions)}
                            name={'...'}/> </>}
                        {showMovieActions && <> 
                            <Card
                                showCard={showMovieActions}
                                closeEvent={() => setMovieActionVisibility(!showMovieActions)}>
                                <CardActions name={'Edit'} movie={movie}/>
                            </Card>
                         </>}
                    </div>
                </div>
                <div className="uk-card-body" onClick={() => detailsEvent(movie.id)}>
                    <div className="uk-child-width-expand" data-uk-grid>
                        <h3 className="uk-card-title"
                            style={{
                            color: '#FFFFFF'
                        }}>
                            {movie.title}
                        </h3>
                        <span>
                            {movie.release_date}
                        </span>
                    </div>
                    <p>{movie.genres.map(genre => genre).join(' & ')}</p>
                </div>
            </div>
        </div>
    )
}

export default React.memo(MovieCard);

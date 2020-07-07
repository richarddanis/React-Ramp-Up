import React, {useState} from "react";
import HandlerButton from "../../../util/HandlerButton";
import Card from "../../../util/Card";
import {useDispatch} from 'react-redux';
import * as actionType from '../../../../store/actions/actions';
import DeleteMovieSection from "../delete/DeleteModal";

function CardActions({movie}) {
    const [isShowDeleteModal, setShowDeleteModal] = useState(false);

    const dispatch = useDispatch();

    const onShowEditMovieFormModal = (movie) => {
        dispatch(actionType.showMovieForm(movie));
    }

    return (
        <div>
            <HandlerButton eventName={() => onShowEditMovieFormModal(movie)}>Edit</HandlerButton>
            <HandlerButton eventName={() => setShowDeleteModal(!isShowDeleteModal)}>Delete</HandlerButton>
            <DeleteMovieSection isShow={isShowDeleteModal} movieId={movie.id} closeEvent={() => setShowDeleteModal(!isShowDeleteModal)}/>
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
                        {!showMovieActions && 
                        <> 
                            <HandlerButton eventName={() => setMovieActionVisibility(!showMovieActions)}>
                            ...
                            </HandlerButton> 
                        </>}
                        {showMovieActions && <> 
                        <Card showCard={showMovieActions} closeEvent={() => setMovieActionVisibility(!showMovieActions)}>
                            <CardActions movie={movie}/>
                        </Card> </>}
                    </div>
                </div>
                <div className="uk-card-body" onClick={() => detailsEvent(movie.id)}>
                    <div className="uk-child-width-expand" data-uk-grid>
                        <h3
                            className="uk-card-title"
                            style={{
                            color: '#FFFFFF'
                        }}>
                            {movie.title}
                        </h3>
                        <span>
                            {movie.release_date}
                        </span>
                    </div>
                    <p>{movie
                            .genres
                            .map(genre => genre)
                            .join(' & ')}</p>
                </div>
            </div>
        </div>
    )
}

export default React.memo(MovieCard);

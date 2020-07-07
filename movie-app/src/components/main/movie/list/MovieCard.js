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
        const isEditableMovie = true;
        dispatch(actionType.handleShowMovieForm(movie, isEditableMovie));
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
            <div className="uk-card uk-card-default background-transparent color-white" style={{backgroundColor: 'transparent', color: '#FFFFFF'}}>
                <div className="uk-card-media-top">
                    <img src={`${movie.poster_path}`} alt=""/>
                    <div className="uk-card-badge">
                        {!showMovieActions && 
                        <> 
                            <HandlerButton eventName={() => setMovieActionVisibility(!showMovieActions)}>
                            ...
                            </HandlerButton> 
                        </>}
                        {showMovieActions && 
                        <> 
                            <Card showCard={showMovieActions} closeEvent={() => setMovieActionVisibility(!showMovieActions)}>
                                <CardActions movie={movie}/>
                            </Card> 
                        </>}
                    </div>
                </div>
                <div className="uk-card-body" onClick={() => detailsEvent(movie.id)}>
                    <div className="uk-child-width-expand" data-uk-grid>
                        <h3 className="uk-card-title">
                            <span className="color-white">{movie.title}</span>
                        </h3>
                            <button className="uk-disabled uk-button uk-button-default uk-button-small uk-border-rounded uk-margin-remove uk-padding-remove" >
                                <span className="color-white uk-margin-remove uk-padding-remove">{movie.release_date}</span>
                            </button>
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

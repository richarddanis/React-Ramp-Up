import React, {useEffect} from "react";
import NetflixRouletteName from "../../util/NetflixRouletteName";
import Card from "../../util/Card";
import {useDispatch} from 'react-redux';
import * as actionType from '../../../store/actions/actions'
import {useSelector} from 'react-redux';
import { useParams} from "react-router";

const MovieDetails = () => {
    const dispatch = useDispatch();
    const movie = useSelector(state => state.detailsReducer.details);
    const { id } = useParams();


    function handleCloseMovieDetails(){
        dispatch(actionType.handleCloseDetailsSection());
    }

    useEffect(() => {
        dispatch(actionType.handleMovieDetailsLoad(id));
    }, [id, dispatch]);

    return(
        <div className="uk-container-expand uk-panel" >
            {console.log('Movie: '+ movie)}
            <Card closeEvent={handleCloseMovieDetails}>
                 <div className="uk-grid-small uk-child-width-expand@s" data-uk-grid>
                    <NetflixRouletteName/>
                </div>
                    <div className="uk-grid-small uk-child-width-expand@s" data-uk-grid>
                        <div className="uk-card-media-left uk-cover-container">
                            <img src={`${movie.poster_path}`} alt="" data-uk-cover/>
                            <canvas width="" height=""></canvas>
                        </div>
                        <div className="uk-card-body" style={{color: 'white'}}>
                            <h3 className="uk-card-title"><span className="color-white">{[`${movie.title}`,`${movie.vote_average}`].join(' ')}</span></h3>
                            <p>{movie.genres.map(genre => genre).join(' & ')}</p>
                            <span style={{color: '#F65261'}}>{movie.release_date}</span>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
            </Card>
        </div>
    );
}

export default MovieDetails;
import React, { useEffect } from "react";
import NetflixRouletteName from "../../util/NetflixRouletteName";
import Card from "../../util/Card";
import { useDispatch, useSelector } from "react-redux";
import * as actionType from "../../../store/actions/actions";
import { useParams, useHistory } from "react-router";

const Movie = ({ movie }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  function handleCloseMovieDetails() {
    dispatch(actionType.handleCloseDetailsSection());
    history.push("/");
  }

  return (
    <div className="uk-container-expand uk-panel">
      <Card closeEvent={handleCloseMovieDetails}>
        <div className="uk-grid-small uk-child-width-expand@s" data-uk-grid>
          <NetflixRouletteName />
        </div>
        <div className="uk-grid-small uk-child-width-expand@s" data-uk-grid>
          <div className="uk-card-media-left uk-cover-container">
            <img src={`${movie.poster_path}`} alt="" data-uk-cover />
            <canvas width="" height=""></canvas>
          </div>
          <div className="uk-card-body" style={{ color: "white" }}>
            <h3 className="uk-card-title">
              <span className="color-white">
                {[`${movie.title}`, `${movie.vote_average}`].join(" ")}
              </span>
            </h3>
            <p>{movie.genres.map((genre) => genre).join(" & ")}</p>
            <span style={{ color: "#F65261" }}>{movie.release_date}</span>
            <p>{movie.overview}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

const LoadingScreen = () => {
  return <h1>Loading</h1>;
};

const MovieDetails = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.detailsReducer.details);
  const isLoaded = useSelector((state) => state.detailsReducer.isLoaded);
  const { id } = useParams();

  useEffect(() => {
    dispatch(actionType.handleMovieDetailsLoad(id));
  }, [dispatch, id]);

  return <div>{isLoaded ? <Movie movie={movie} /> : <LoadingScreen />}</div>;
};

export default MovieDetails;

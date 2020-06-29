import React, {useState} from "react";
import "../../../style/move-form.css";
import MovieForm from "../../form/MovieForm";

export default function AddNewMovie() {
    const [showMovieForm,
        setMoveFormVisibility] = useState(false);

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
                    <MovieForm movieId={null}/>
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
            </div> </>}
        </div>
    );
}

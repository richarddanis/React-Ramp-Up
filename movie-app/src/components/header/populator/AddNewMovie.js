import React, {useState} from "react";
import "../../../style/move-form.css";
import MovieForm from "../../form/MovieForm";
import Card from "../../util/Card";
import HandlerButton from "../../util/HandlerButton";
import Input from "../../form/input";

export default function AddNewMovie() {
    const [showMovieForm,
        setMoveFormVisibility] = useState(false);

    return (
        <div>
            <div>
                <div className="uk-position-medium uk-position-right ">
                <HandlerButton
                            eventName={() => setMoveFormVisibility(!showMovieForm)}
                            name={'+ ADD MOVIE'}
                            movieId={null}/>
                </div>
            </div>

            {showMovieForm && <> <div className="uk-position-z-index uk-position-absolute">
                <div
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
                            <Card showCard={showMovieForm}
                                  closeEvent={() => setMoveFormVisibility(!showMovieForm)}>
                                       <MovieForm movieId={null} title={'ADD NEW MOVIE'}/>
                            </Card>
                        </div>
                    </div>
            </div> </>
            }
        </div>
    );
}

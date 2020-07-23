import React from "react";
import CenterCard from "../../../util/CenterCard";
import Card from "../../../util/Card";
import { useDispatch } from "react-redux";
import HandlerButton from "../../../util/HandlerButton";
import * as actionType from "../../../../store/actions/actions";

function DeleteMovieSection({ movieId, isShow, closeEvent }) {
  const dispatch = useDispatch();

  const onDeleteMovie = (movieId) => {
    dispatch(actionType.handleDeleteMovie(movieId));
  };

  return (
    <>
      {isShow && (
        <>
          <CenterCard>
            <Card closeEvent={closeEvent}>
              <div>
                <h1 className="color-white">Delete movie</h1>
                <p>Are you sure want to delete the movie?</p>
                <HandlerButton eventName={() => onDeleteMovie(movieId)}>
                  Confirm
                </HandlerButton>
              </div>
            </Card>
          </CenterCard>
        </>
      )}
    </>
  );
}

export default DeleteMovieSection;

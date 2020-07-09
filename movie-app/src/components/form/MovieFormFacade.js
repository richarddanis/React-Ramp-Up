import React from "react";
import CenterCard from "../util/CenterCard";
import Card from "../util/Card";
import {useSelector, useDispatch} from 'react-redux';
import * as actionType from "./../../store/actions/actions";

const FormFacede = (props) => {

    const dispatch = useDispatch();

    const isShowForm = useSelector(state => state.movies.isShowModal)

    function handleCloseEvent() {
        dispatch(actionType.handleCloseMovieForm());
    }

    return (
        <div>{isShowForm && <> 
            <CenterCard>
                    <Card closeEvent={handleCloseEvent}>
                        <div className="uk-width-large ">
                            {props.children}
                        </div>
                    </Card>
            </CenterCard>
        </>}
        </div>
    );
}

export default FormFacede;
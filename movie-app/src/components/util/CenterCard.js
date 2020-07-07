import React from "react";

const centerCard = (props) => {
    return (
        <div
            className="uk-position-fixed uk-position-top uk-position-left center-card-position" style={{backgroundColor: '#0008'}}>
            <div className="uk-position-center">
                {props.children}
            </div>
        </div>
    )
}

export default centerCard;

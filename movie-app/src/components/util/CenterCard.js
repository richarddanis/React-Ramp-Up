import React from "react";

const centerCard = (props) => {
    return (
        <div
            className="uk-position-fixed uk-position-top uk-position-left"
            style={{
            backgroundColor: '#0008',
            width: '100%',
            height: '100%',
            zIndex: 10
        }}>
            <div className="uk-position-center">
                {props.children}
            </div>
        </div>
    )
}

export default centerCard;
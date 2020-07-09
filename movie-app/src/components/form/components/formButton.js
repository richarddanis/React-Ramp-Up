import React from 'react';

const FormButton = (props) => {
    return ( 
    <div className = "uk-padding-small" > 
        <button className="uk-button uk-button-default uk-border-rounded color-white"
            {...props}>
                <span className="color-white">
                 {props.name}
            </span>
        </button> 
    </div>
    );
}

export default FormButton;
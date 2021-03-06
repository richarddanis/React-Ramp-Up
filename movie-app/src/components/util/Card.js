import React from "react";
import HandlerButton from "./HandlerButton";

function Card(props) {
    return (
        <div>
            {
             `${props.showCard}`
             && 
             <> 
             <div>
                <div className="uk-card-default uk-card-body uk-border-rounded" style={{backgroundColor: "#232323"}}>
                    <div className="uk-card-badge">
                    <HandlerButton eventName={props.closeEvent}>X</HandlerButton>
                    </div>
                    <div className="uk-margin">
                        {props.children}
                    </div>
                </div>
            </div> 
            </>
            }
        </div>
    );
}

export default Card;

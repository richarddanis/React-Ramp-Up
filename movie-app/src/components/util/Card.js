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
                <div
                    className="uk-card-default uk-card-body"
                    style={{
                    backgroundColor: '#232323'
                }}>
                    <div className="uk-card-badge">
                    <HandlerButton eventName={props.closeEvent} name={'X'} movieId={props.id}/>
                    </div>
                    <div>
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
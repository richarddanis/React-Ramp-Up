import React, { useState } from "react";

function SortableMovie({sortAction}) {
    const [buttonName, setButtonName] = useState('...');

    function actionAndButtonNameChange(e){
        setButtonName(e.target.name);
        return sortAction(e.target.value);
    }

    return <div style={{color: "white"}}>
        <div className="uk-button-group uk-float-right">
            <span className="uk-padding-small">SORT BY</span>
            <div className="uk-inline">
                <button style={{backgroundColor: "transparent"}} className="uk-button" type="button">
                    <span style={{color: "white"}}>{buttonName}</span>
                </button>
                <div uk-dropdown="mode: click; boundary: ! .uk-button-group; boundary-align: true;" style={{backgroundColor: "#232323"}}>
                    <ul className="uk-nav uk-dropdown-nav">
                        <button className="uk-active" value='release_date' name='Release date' onClick={(e) => actionAndButtonNameChange(e)}>Relase date</button>
                        <button className="uk-active" value='rating' name='Rating' onClick={(e) => actionAndButtonNameChange(e)}>Rating</button>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}

export default SortableMovie;
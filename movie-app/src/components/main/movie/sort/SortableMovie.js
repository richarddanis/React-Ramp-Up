import React, { useState } from "react";

export default function SortableMovie({sortAction}) {
    const [buttonName, setButtonName] = useState('ASC');

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
                <div uk-dropdown="mode: click; boundary: ! .uk-button-group; boundary-align: true;">
                    <ul className="uk-nav uk-dropdown-nav">
                        <button className="uk-active" value='asc' name='ASC' onClick={(e) => actionAndButtonNameChange(e)}>ASC</button>
                        <button className="uk-active" value='desc' name='DESC' onClick={(e) => actionAndButtonNameChange(e)}>DESC</button>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}
import React, { useState } from "react";

export default function SortableMovie({sortAction}) {
    const [buttonName, setButtonName] = useState('releaseYear');

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
                        <button className="uk-active" value='releaseYear' name='ReleaseYear' onClick={(e) => actionAndButtonNameChange(e)}>ReleaseYear</button>
                        <button className="uk-active" value='somethingOther' name='SomethingOther' onClick={(e) => actionAndButtonNameChange(e)}>SomethingOther</button>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}
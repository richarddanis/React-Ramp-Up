import React from "react";

export default function SortableMovie() {
    return <div style={{color: "white"}}>
        <div className="uk-button-group uk-float-right">
            <span className="uk-padding-small">SORT BY</span>
            <div className="uk-inline">
                <button style={{backgroundColor: "transparent"}} className="uk-button" type="button">
                    <span style={{color: "white"}}>DESC</span>
                </button>
                <div uk-dropdown="mode: click; boundary: ! .uk-button-group; boundary-align: true;">
                    <ul className="uk-nav uk-dropdown-nav">
                        <li className="uk-active"></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>;
}
import React from "react";

export default function Searchbar() {
    return (
        <div
            className="uk-grid-collapse uk-child-width-expand@s uk-text-center uk-margin-large-top uk-padding-large uk-padding-remove-top"
            data-uk-grid>
            <div className="uk-padding-small">
                <input className="uk-input uk-form-width-large uk-float-right uk-border-rounded" type="text"
                       placeholder="Find your movie!"/>
            </div>
            <div className="uk-padding-small">
                <button className="uk-button uk-float-left uk-border-rounded"
                        style={{backgroundColor: '#F65261'}}>
                    <span style={{color: "white"}}>Search</span>
                </button>
            </div>
        </div>
    );
}

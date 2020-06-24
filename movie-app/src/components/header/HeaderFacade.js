import React from "react";
import ImageDB from "../../resources/header-image.jpg"
import AddNewMovie from "./populator/AddNewMovie";
import SearchBar from "./search/SearchBar";
import NetflixRouletteName from "../util/NetflixRouletteName";

export class HeaderFacade extends React.Component {
    render() {
        return (
            <div className="uk-container-expand uk-padding uk-panel" style={{backgroundImage: `url(${ImageDB}`}}>
                <div className="uk-grid-small uk-child-width-expand@s" data-uk-grid>
                    <NetflixRouletteName/>
                    <AddNewMovie/>
                </div>
                <div>
                    <h1 className="uk-text-uppercase uk-padding uk-padding-remove-bottom" style={{color: "white"}}>FIND
                        YOUR MOVE</h1>
                </div>
                <SearchBar/>
            </div>
        );
    }
}
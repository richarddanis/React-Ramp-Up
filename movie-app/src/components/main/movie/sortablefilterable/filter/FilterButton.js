import React from "react";

function FilterButton({title, filterAction}) {
    return (
        <div>
            <button
                className="uk-button background-transparent"
                onClick={filterAction}>
                <span className="color-white">{title}</span>
            </button>
        </div>
    );
}

export default FilterButton;

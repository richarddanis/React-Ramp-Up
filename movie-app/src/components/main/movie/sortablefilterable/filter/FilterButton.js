import React from "react";

function FilterButton({title, filterAction}) {
    return (
        <div>
            <button
                className="uk-button"
                onClick={filterAction}
                style={{
                backgroundColor: "transparent"
            }}>
                <span className="color-white">{title}</span>
            </button>
        </div>
    );
}

export default FilterButton;
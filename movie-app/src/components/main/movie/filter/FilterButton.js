import React from "react";

function FilterButton({category}) {
    return (
        <div>
                <button className="uk-button"
                            onClick={() => console.log('Clicked button is:')}
                            style={{
                            backgroundColor: "transparent"
                        }}>
                            <span
                                style={{
                                color: "white"
                            }}>{category}
                            </span>
                            </button>
        </div>
    );
}

export default FilterButton;

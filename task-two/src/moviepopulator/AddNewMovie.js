import React, {useState} from "react";
import Button from "@material-ui/core/Button";

export default function AddNewMovie() {
    const [showAddMovieForm, setMoveFormVisibility] = useState(false);

    return (
        <div className="App">
            <Button onClick={() => setMoveFormVisibility(!showAddMovieForm)}>Add new movie</Button>
            {showAddMovieForm && <>
                <p>Show me the money!</p>
            </>}
        </div>
    );
}

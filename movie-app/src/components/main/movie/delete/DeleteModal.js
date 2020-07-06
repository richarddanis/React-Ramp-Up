import React from 'react';

function DeleteSection({movieId}) {
    return (
        <div>
            <h1 style={{color: 'white'}}>Delete movie</h1>
            <p>Are you sure want to delete the movie?</p>
            <HandlerButton name={'Confirm'} movieId={movieId}/>
        </div>
    )
}

export default DeleteSection;
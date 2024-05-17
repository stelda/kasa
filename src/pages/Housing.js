import React from 'react';
import { useParams } from 'react-router-dom';

function Housing() {
    let { id } = useParams();

    return (
        <div>
            <div>
                <h1>Housing Details</h1>
                <p>Details for Housing ID: {id}</p>
            </div>
        </div>
    );
}

export default Housing;

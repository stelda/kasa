import React from 'react';
import { useParams } from 'react-router-dom';


function Housing() {
    let { id } = useParams();

    return (
        <main className='main-container'>
            <div>
                <h1>Housing Details</h1>
                <p>Details for Housing ID: {id}</p>

            </div>
        </main>
    );
}

export default Housing;

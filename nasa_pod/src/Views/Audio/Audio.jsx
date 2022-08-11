import React from 'react';

import theme from './theme.mp3'



export default function AudioComponent () {

    return(
        <div>

            <audio controls autoPlay>
                <source src={theme} type="audio/mp3" />
            </audio>

        </div>
    )
} 
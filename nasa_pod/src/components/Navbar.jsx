import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return(
        <div className='my-6'>
            <ul className='flex flex-row'>
                <li className='flex-1'>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className='flex-1'>
                    <Link to='/apod'>
                        Photo Of The Day
                    </Link>
                </li>
                <li className='flex-1'>
                    <Link to='/mars'>
                        Mars Rover Photos
                    </Link>
                </li>
                <li className='flex-1'>
                    <Link to="/earth">
                        Earth
                    </Link>
                </li>
            </ul>
        </div>
    )
}
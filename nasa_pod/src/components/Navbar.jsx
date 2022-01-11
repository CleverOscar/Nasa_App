import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return(
        <div className='border-2 py-4'>
            <ul className='text-base flex flex-row items-center text-center'>
                <Link className="w-1/4"  to="/">
                    Home
                </Link>
                <Link className="w-1/4" to='/apod'>
                    Photo Of The Day
                </Link>
                <Link className="w-1/4" to='/mars'>
                    Mars Rover Photos
                </Link>
                <Link className="w-1/4" to="/earth">
                    Earth
                </Link>
            </ul>
        </div>
    )
}
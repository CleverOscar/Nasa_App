import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return(
        <div className='border-2 py-4 rounded-xl'>
            <ul className='flex flex-row text-center'>
                <li className='flex-initial w-full'>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className='flex-initial w-full'>
                    <Link to='/apod'>
                        Photo Of The Day
                    </Link>
                </li>
                <li className='flex-initial w-full'>
                    <Link to='/mars'>
                        Mars Rover Photos
                    </Link>
                </li>
                <li className='flex-initial w-full'>
                    <Link to="/earth">
                        Earth
                    </Link>
                </li>
            </ul>
        </div>
    )
}
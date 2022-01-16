import React from 'react';
import {Link} from 'react-router-dom';

const midScreenNav = <div className='hidden md:block border-2 border-blue-500 py-4'>
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

const smallScreenNav = <div className='flex flex-row block border-2 border-red-500 p-4  md:hidden'>
                            <p className="w-full">Nasa Portal</p>
                            <ul className='text-base  items-center text-center border '>
                                Nav
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




export default function Navbar() {
    return(
        <div>
            {midScreenNav}
            {smallScreenNav}
        </div>
    )
}


{/* <ul className='text-base flex flex-col items-center text-center'>
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
</ul> */}
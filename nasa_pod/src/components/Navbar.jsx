import React, {useState} from 'react';
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
                            <ul className={'text-base  items-center text-center border'}>
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

    const [openNavbar, setOpenNavbar] = useState(false);

    return(
        <div className='flex flex-row items-center border-2 border-blue-500 py-4 px-8'>
            <Link className=""  to="/">
                Nasa Portal
            </Link>

            <button className="ml-auto" type="button">
                Menu
            </button>

            <ul className='text-base ml-auto border flex flex-col hidden'>
                
                <Link to='/apod'>
                    Photo Of The Day
                </Link>
                <Link to='/mars'>
                    Mars Rover Photos
                </Link>
                <Link to="/earth">
                    Earth
                </Link>
            </ul>
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
import React, {useState} from 'react';
import {Link} from 'react-router-dom';



export default function Navbar() {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return(
        <>
            <nav className="bg-inherit text-white">
                
                <div className="p-4 flex flex-wrap items-center">

                    <div className="text-lg w-full items-center relative flex justify-between lg:w-auto lg:static lg:block">
                        <Link className="uppercase font-bold italic underline" to='/'>Nasa Portal</Link>

                        <button className="bg-gray-800 cursor-pointer text-lg border-2 border-black px-3 py-2 rounded lg:hidden" type="button" onClick={()=>{setNavbarOpen(!navbarOpen)}}>
                            Menu
                        </button>

                    </div>


                    <div className={`ml-auto font-semibold lg:flex flex-row` + (navbarOpen ? ` flex` : ` hidden`) }>
                        <ul className="flex flex-col lg:flex-row list none ml-auto uppercase text-right">
                            <Link className="py-3 z-10 lg:px-4 hover:underline"  to="/">
                                Home
                            </Link>
                            <Link className="py-3 z-10 lg:px-4 hover:underline" to='/apod'>
                                Photo Of The Day
                            </Link>
                            <Link className="py-3 z-10 lg:px-4 hover:underline" to='/mars'>
                                Mars Rover Photos
                            </Link>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}
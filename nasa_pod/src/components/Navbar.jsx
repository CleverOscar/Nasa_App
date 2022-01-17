import React, {useState} from 'react';
import {Link} from 'react-router-dom';



export default function Navbar() {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return(
        <div className='border-b-2 shadow-lg p-4 uppercase flex flex-wrap sticky top-0 bg-white'>
                            <div className=" w-full flex flex-row items-center">
                                <p className="mr-auto">Nasa Portal</p>
                                <button className="border-2 text-base p-2 md:hidden" type="button" onClick={()=> {setNavbarOpen(!navbarOpen)}}>
                                    MENU
                                </button>
                            </div>

                            <div className={"ml-auto"}>
                                <div className="flex flex-col text-center md:flex ">
                                    
                                    <Link className=""  to="/">
                                        Home
                                    </Link>
                                    <Link className=" " to='/apod'>
                                        Photo Of The Day
                                    </Link>
                                    <Link className=" " to='/mars'>
                                        Mars Rover Photos
                                    </Link>
                                    <Link className=" " to="/earth">
                                        Earth
                                    </Link>
                                    
                               </div>
                            </div>
                        </div>
    )
}


// <div className='bg-white border-b-2 flex flex-row items-center p-4 uppercase sticky top-0 shadow-xl'>
// <p className="mr-auto">Nasa Portal</p>
// <Link className="mr-4 hover:underline"  to="/">
// Home
// </Link>
// <Link className="mr-4 hover:underline" to='/apod'>
// Photo Of The Day
// </Link>
// <Link className="mr-4 hover:underline" to='/mars'>
// Mars Rover Photos
// </Link>
// <Link className=" hover:underline" to="/earth">
// Earth
// </Link>
// </div>
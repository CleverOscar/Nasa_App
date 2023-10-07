import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {

    const [navbarOpen, setNavbarOpen] = useState(false);

    var linkClass = "py-3 z-10 lg:px-4 hover:underline"

    var paths = [   
                    {to:"/", path: "Home"}, 
                    {to:"/apod", path: "Photo Of The Day"}, 
                    {to:"/mars", path: "Mars Rover"}, 
                    {to:"/about", path: "About"}
                ];

    var links = paths.map(el => <Link className={linkClass}  to={el.to}>
                                    {el.path}
                                </Link>)

    return(
        <>
            <nav className=" text-lg text-white lg:text-xl mb-12">
                
                <div className="p-4 flex flex-wrap items-center">

                    <div className=" w-full items-center relative flex justify-between lg:w-auto lg:static lg:block">
                        <Link className="uppercase italic " to='/'>Nasa Portal</Link>

                        <button className=" px-3 py-2 dark-palette lg:hidden" type="button" onClick={()=>{setNavbarOpen(!navbarOpen)}}>
                            Menu
                        </button>

                    </div>


                    <div className={`ml-auto  lg:flex flex-row` + (navbarOpen ? ` flex` : ` hidden`) }>
                        <ul className="flex flex-col lg:flex-row list none ml-auto uppercase text-right">
                            {links}
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}
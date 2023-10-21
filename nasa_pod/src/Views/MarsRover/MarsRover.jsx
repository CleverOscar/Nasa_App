import React, {useState} from 'react';

import {Link, Routes, Route} from 'react-router-dom'
import Curiosity from './Rovers/Curiosity/Curiosity';
import Opportunity from './Rovers/Opportunity/Opportunity';
import Spirit from './Rovers/Spirit/Spirit';

export default function MarsRover(){

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var todaysDate = yyyy + '-' + mm + '-' + dd;

    // // Images State
    // const [roverImages, setRoverImages] = useState([]);

    const [pageNumeber] = useState(1);

    // Key
    const api = "JbPskfAcVPpxN602YevCVKqXG7dh7VZ7Yb8qkM2j"

    // Date
    let [yourDate] = useState(todaysDate);

    return(
        <div className="w-full mx-auto mb-auto flex flex-col px-2 md:px-0">

            <div>
                <ul className=" text-lg lg:text-xl dark-palette uppercase flex flex-col md:flex-row flex-wrap list-none " 
                id="tabs-tabJustify" 
                role="tablist"
                >
                    <li className="nav-item flex-grow text-center" role="presentation">
                        <Link to="curiosity" href="#tabs-homeJustify" className=" w-full block leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 hover:border-transparent hover:bg-gray-70 focus:bg-gray-900 " 
                        id="tabs-home-tabJustify" role="tab"
                        aria-controls="tabs-homeJustify" aria-selected="true">
                            
                                Curiosity
                            
                        </Link>
                    </li>

                    <li className="nav-item flex-grow text-center" role="presentation">
                        <Link to="opportunity" href="#tabs-profileJustify" className="
                
                w-full
                block
                
                
                
                leading-tight
                
                border-x-0 border-t-0 border-b-2 border-transparent
                px-6
                py-3
                
                
                hover:border-transparent hover:bg-gray-700
                focus:bg-gray-900
                " id="tabs-profile-tabJustify"  role="tab"
                        aria-controls="tabs-profileJustify" aria-selected="false">Opportunity</Link>
                    </li>

                    <li className="nav-item flex-grow text-center" role="presentation">
                        <Link to="spirit" href="#tabs-messagesJustify" className="
                
                w-full
                block
                
                
                
                leading-tight
                
                border-x-0 border-t-0 border-b-2 border-transparent
                px-6
                py-3
                
                
                hover:border-transparent hover:bg-gray-700
                focus:bg-gray-900
                " id="tabs-messages-tabJustify"  role="tab"
                        aria-controls="tabs-messagesJustify" aria-selected="false">Spirit</Link>
                    </li>

                </ul>

                <div className="tab-content text-white" id="tabs-tabContentJustify">
                    <div className="tab-pane fade show active" id="tabs-homeJustify" role="tabpanel"
                    aria-labelledby="tabs-home-tabJustify">
                        
                        <Routes>
                            <Route path='curiosity' element={<Curiosity />} />
                            <Route path='opportunity' element={<Opportunity />} /> 
                            <Route path='spirit' element={<Spirit />} />
                        </Routes>

                    </div>
                </div>
            </div>

        </div>
    )
}
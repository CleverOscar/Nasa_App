import React, {useState} from 'react';
import axios from 'axios';

import {Link, Routes, Route} from 'react-router-dom'
import Curiosity from './Rovers/Curiosity/Curiosity';
import Opportunity from './Rovers/Opportunity/Opportunity';
import Spirit from './Rovers/Spirit/Spirit';

// import Pagination from './views/Pagination';
// import Images from './views/Images';
// import InfoCard from './views/InfoCard';
// import RoverCarousel from './views/Carousel';

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
    let [yourDate, setYourDate] = useState(todaysDate);

    // url 
    let  url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${yourDate}&page=${pageNumeber}&api_key=${api}`;
    


    return(
        <div className="w-11/12 mx-auto mb-auto flex flex-col">

            <div>
        <ul className="
        bg-gray-800/50
        nav nav-tabs nav-justified
        flex flex-col
        md:flex-row
        flex-wrap
        list-none
        border-b-0
        pl-0
        " 
        id="tabs-tabJustify" 
        role="tablist">
            <li className="nav-item flex-grow text-center" role="presentation">
                <Link to="curiosity" href="#tabs-homeJustify" className="
                text-white
                w-full
                block
                font-medium
                text-xs
                leading-tight
                uppercase
                border-x-0 border-t-0 border-b-2 border-transparent
                px-6
                py-3
                
                
                hover:border-transparent hover:bg-gray-100
                focus:bg-gray-900
                " id="tabs-home-tabJustify" role="tab"
                aria-controls="tabs-homeJustify" aria-selected="true">
                    
                        Curiosity
                    
                </Link>
            </li>
            <li className="nav-item flex-grow text-center" role="presentation">
                <Link to="opportunity" href="#tabs-profileJustify" className="
                text-white
                w-full
                block
                font-medium
                text-xs
                leading-tight
                uppercase
                border-x-0 border-t-0 border-b-2 border-transparent
                px-6
                py-3
                
                hover:border-transparent hover:bg-gray-100
                focus:bg-gray-900
                " id="tabs-profile-tabJustify"  role="tab"
                aria-controls="tabs-profileJustify" aria-selected="false">Opportunity</Link>
            </li>
            <li className="nav-item flex-grow text-center" role="presentation">
                <Link to="spirit" href="#tabs-messagesJustify" className="
                text-white
                w-full
                block
                font-medium
                text-xs
                leading-tight
                uppercase
                border-x-0 border-t-0 border-b-2 border-transparent
                px-6
                py-3
                
                hover:border-transparent hover:bg-gray-100
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
import React from 'react'

import {Link, Routes, Route} from 'react-router-dom'

import PhotoOfTheDay from '../PhotoOfTheDay/PhotoOfTheDay';
import RandomPhoto from '../RandomPhoto/Random_photo';
import DatePicker from '../DatePicker/DatePicker';

export default function OptionsTab() {

    var unOrderList = "text-lg lg:text-xl border-2 shadow-sm shadow-white rounded-lg text-white uppercase  bg-gray-800/80 flex flex-col md:flex-row flex-wrap list-none pl-0" 
    var link = "w-full block leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 hover:border-transparent hover:bg-gray-700/40 focus:bg-gray-900/80"

    return(
    <div>

        {/* Tab bar */}
        <ul className={unOrderList}
            id="tabs-tabJustify" 
            role="tablist">
            
            <li className="nav-item flex-grow text-center" role="presentation">
                <Link   to="photo-of-the-day" href="#tabs-homeJustify" 
                        className={link} 
                        id="tabs-home-tabJustify" 
                        role="tab"
                        aria-controls="tabs-homeJustify"
                        aria-selected="true">Photo-Of-The-Day
                </Link>
            </li>
            
            <li className="nav-item flex-grow text-center" role="presentation">
                <Link   to="random" 
                        href="#tabs-profileJustify"   
                        className={link} 
                        id="tabs-profile-tabJustify"  
                        role="tab"
                        aria-controls="tabs-profileJustify" 
                        aria-selected="false">Random Image
                        </Link>
            </li>
            
            <li className="nav-item flex-grow text-center" role="presentation">
                <Link   to="date-picker" 
                        href="#tabs-messagesJustify" 
                        className={link}
                        id="tabs-messages-tabJustify"  
                        role="tab"
                        aria-controls="tabs-messagesJustify" 
                        aria-selected="false">Date Picker
                </Link>
            </li>

        </ul>



                {/* Views to routes */}

                <div className="tab-content text-white" id="tabs-tabContentJustify">
                    <div className="tab-pane fade show active" id="tabs-homeJustify" role="tabpanel"
                    aria-labelledby="tabs-home-tabJustify">
                        <Routes>
                            <Route path='photo-of-the-day' element={<PhotoOfTheDay />} />
                            <Route path='random' element={<RandomPhoto />} /> 
                            <Route path='date-picker' element={<DatePicker />} />
                        </Routes>

                    </div>
                </div>



    </div>
    )
}
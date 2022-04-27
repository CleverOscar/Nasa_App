import React from 'react'
import 'tw-elements';

import {Link, Routes, Route} from 'react-router-dom'

import PhotoOfTheDay from './PhotoOfTheDay';
import RandomPhoto from './Random_photo';
import DatePicker from './DatePicker';

export default function OptionsTab() {
    return(
    <div>
        <ul className="
        bg-white
        nav nav-tabs nav-justified
        flex flex-col
        md:flex-row
        flex-wrap
        list-none
        border-b-0
        pl-0
        " id="tabs-tabJustify" role="tablist">
            <li className="nav-item flex-grow text-center" role="presentation">
                <Link to="photo-of-the-day" href="#tabs-homeJustify" className="
                nav-link
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
                focus:border-transparent
                " id="tabs-home-tabJustify" role="tab"
                aria-controls="tabs-homeJustify" aria-selected="true">
                    
                        Photo-Of-The-Day
                    
                </Link>
            </li>
            <li className="nav-item flex-grow text-center" role="presentation">
                <Link to="random" href="#tabs-profileJustify" className="
                nav-link
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
                focus:border-transparent
                " id="tabs-profile-tabJustify"  role="tab"
                aria-controls="tabs-profileJustify" aria-selected="false"> Random Image</Link>
            </li>
            <li className="nav-item flex-grow text-center" role="presentation">
                <Link to="date-picker" href="#tabs-messagesJustify" className="
                nav-link
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
                focus:border-transparent
                " id="tabs-messages-tabJustify"  role="tab"
                aria-controls="tabs-messagesJustify" aria-selected="false">Date Picker</Link>
            </li>
        </ul>



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
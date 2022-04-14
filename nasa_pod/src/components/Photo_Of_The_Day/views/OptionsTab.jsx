import React from 'react'
import 'tw-elements';

import Card from './Card';

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
        mb-4
        " id="tabs-tabJustify" role="tablist">
        <li className="nav-item flex-grow text-center" role="presentation">
            <a href="#tabs-homeJustify" className="
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
            active
            " id="tabs-home-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-homeJustify" role="tab"
            aria-controls="tabs-homeJustify" aria-selected="true">Photo Of The Day</a>
        </li>
        <li className="nav-item flex-grow text-center" role="presentation">
            <a href="#tabs-profileJustify" className="
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
            " id="tabs-profile-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-profileJustify" role="tab"
            aria-controls="tabs-profileJustify" aria-selected="false">Random Image</a>
        </li>
        <li className="nav-item flex-grow text-center" role="presentation">
            <a href="#tabs-messagesJustify" className="
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
            " id="tabs-messages-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-messagesJustify" role="tab"
            aria-controls="tabs-messagesJustify" aria-selected="false">Date Picker</a>
        </li>
        </ul>


        <div className="tab-content text-white" id="tabs-tabContentJustify">
        <div className="tab-pane fade show active" id="tabs-homeJustify" role="tabpanel"
            aria-labelledby="tabs-home-tabJustify">
            Tab 1 content justify
        </div>
        <div className="tab-pane fade" id="tabs-profileJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
            Tab 2 content justify
        </div>
        <div className="tab-pane fade" id="tabs-messagesJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
            Tab 3 content justify
        </div>
        </div>


    </div>
    )
}
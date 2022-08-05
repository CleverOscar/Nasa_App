import React from 'react';

export default function LandingPage(){

    return(
        <div className='border-4 my-10 text-white border-black mx-4 border-8 border-double bg-gray-700/50 lg:w-1/2 lg:mx-auto'>
            <p className='my-6 text-center text-3xl underline font-code'>
                Nasa API Portal Application
            </p>

            <p className='px-6 pb-6 text-base md:text-2xl font-roboto'>
            A ReactJS application that fetches data from NASA 's Portal API database, two features currently available to use at the moment are Photo Of The Day and the Mars Rover view. Make sure to check them out! 
            </p>

            <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt="nasa logo" />
        </div>
    )
}
import React from 'react';

export default function LandingPage(){

    return(
        <div className='border-4 border-black mx-4 my-8 bg-gray-200 lg:w-1/2 lg:mx-auto'>
            <p className='my-6 text-center text-3xl underline'>
                Nasa API Portal Application
            </p>

            <p className='px-6 pb-6 text-2xl'>
            A React App that fetches data from NASA's API portal. Displaying photos and videos from Earth, Mars, Stars, Galaxies, and more!
            </p>

            <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt="nasa logo" />
        </div>
    )
}
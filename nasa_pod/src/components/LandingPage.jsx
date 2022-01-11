import React from 'react';


export default function LandingPage(){

    return(
        <div className='border-4 rounded-lg w-1/2 mx-auto my-10'>
            <h2 className='text-5xl text-center pt-4'>
                Nasa API Application
            </h2>

            <p className='text-2xl px-10 my-6'>
            A React App that fetches data from NASA's API portal. Displaying photos and videos from Earth, Mars, Stars, Galaxies, and more!
            </p>
        </div>
    )
}


// photos organized by sol 
// 25 photos per  call
// can filtered by camera
// add a page param to the query for more than 25 photos
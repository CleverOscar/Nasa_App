import React from 'react';


export default function LandingPage(){

    return(
        <div className='border-4 w-1/2 mx-auto my-10'>
            <h2 className='text-2xl text-center pt-10'>
                Nasa API Application
            </h2>

            <p className='text-3xl p-8'>
            A React App that fetches data from NASA's API portal. Displaying photos and videos from Earth, Mars, Stars, Galaxies, and more!
            </p>
        </div>
    )
}


// photos organized by sol 
// 25 photos per  call
// can filtered by camera
// add a page param to the query for more than 25 photos
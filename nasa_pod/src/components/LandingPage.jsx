import React from 'react';


export default function LandingPage(){

    return(
        <div className='border-4 w-1/2 mx-auto'>
            <h2 className='text-2xl text-center'>
                Nasa API Application
            </h2>

            <p className='text-lg mx-4 mx-auto my-8'>
            Here we have a ReactJS application access Nasa's API 
            database of free images to the public. It allows curious 
            developers into Astronomy to get a feel of what photos Nasa's 
            satellites or rovers are taking in current time. 
            </p>
        </div>
    )
}


// photos organized by sol 
// 25 photos per  call
// can filtered by camera
// add a page param to the query for more than 25 photos
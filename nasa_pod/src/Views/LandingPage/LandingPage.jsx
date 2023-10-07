import React from 'react';

export default function LandingPage(){

    return(
        <div className='border-4 p-8 text-white border-black border-8 border-double bg-gray-700/80 lg:w-1/2 lg:mx-auto '>
            <p className='mb-8 text-center text-3xl underline font-code'>
                Nasa API Portal Application
            </p>

            <p className=' text-base md:text-2xl'>
            Explore a captivating ReactJS application that seamlessly retrieves data from NASA's extensive Portal API database. Immerse yourself in two intriguing features, namely, the 'Photo of the Day' and an immersive Mars Rover view. Don't miss the chance to experience these fascinating cosmic snapshots!
            </p>

            <img className='w-1/2 mx-auto  mt-6' src="https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png" alt="nasa logo" />
        </div>
    )
}
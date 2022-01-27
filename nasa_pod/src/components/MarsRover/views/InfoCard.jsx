import React from 'react';

export default function InfoCard({data}) {
    return(
        <div className='mx-auto border-4 border-black font-semibold rounded-lg p-4 bg-gray-200 shadow-2xl md:w-10/12 md:text-2xl lg:w-1/2'>
                        <p>Rover Name: <span className='text-red-600 uppercase'>{data.rover.name}</span></p>
                        <p>Rover launch date: <span className='text-blue-600'>{data.rover.launch_date}</span></p>
                        <p>Rover landing date: <span className='text-orange-600'>{data.rover.landing_date}</span></p>
                        <p>Rover status: <span className='text-green-600 uppercase'>{data.rover.status}</span></p>
                        <p>Rover camera view: {data.camera.full_name}</p>
                        <p>Earth Date: <span className='text-green-500'>{data.earth_date}</span></p>
                        <p>Day being on mars: <span className='underline text-red-500'>{data.sol}</span></p>
                        <p>Images: {data.length}</p>
                    </div>
    )
}
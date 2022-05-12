import React, {useState} from 'react';
import Form from '../../../helpers/Form';
import RoverCarousel from '../../views/Carousel';
import todaysDate from '../../../helpers/date';

export default function Spirit(){

    const [data, setData] = useState({
        rover: 'spirit',
        url: "https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos",
        date: todaysDate,
        camera: {
            1: 'fhaz',
            2: 'rhaz',
            3: 'navcam',
            4: 'pancam',
            5: 'minites'
        },
        cameraState: '',
        api: "JbPskfAcVPpxN602YevCVKqXG7dh7VZ7Yb8qkM2j",
        roverImages: []
    });
    
    return(
        <div>
            <div className='text-center my-10 bg-gray-800/50'>
                <p className='text-2xl my-2'> Spirit Rover </p>

                <p>If you can't find any images, try changing the camera.</p>

                <p>Also a <span className='uppercase text-yellow-300 font-bold'>tip, </span> <span className='uppercase text-red-500 font-bold'>Spirit</span> was <span className='text-green-400 uppercase font-bold'>active</span> from <span className='text-blue-400 font-bold'> 2004 - 2010 </span></p>
             </div>

            {/* form and photos view here */}

            <div className='flex flexr-row justify-around bg-gray-800/40'>
                <div className=' w-1/3'>
                    <Form data={data} setData={setData} />
                        
                </div>

                <div className='w-1/3'>
                    <RoverCarousel data={data}/>
                </div>
            </div>
        </div>
    )
}
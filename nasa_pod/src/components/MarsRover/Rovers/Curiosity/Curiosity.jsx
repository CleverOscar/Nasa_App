import React, {useState} from 'react';
import Form from '../../../helpers/Form';
import RoverCarousel from '../../views/Carousel';
import todaysDate from '../../../helpers/date';

export default function Curiosity(props) {

    const [data, setData] = useState({
        rover: 'curiosity',
        url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos`,
        date: todaysDate,
        camera: {
            1: 'fhaz',
            2: 'rhaz',
            3: 'mast',
            4: 'chemcam',
            5: 'mahli',
            6: 'mardi',
            7: 'navcam'
        },
        cameraState: '',
        api: process.env.REACT_APP_NASA_POD_API,  
        roverImages: []
    });
    
    return(
        <div>
           <div className='text-center my-10 bg-gray-800/50'>
                <p className='text-2xl my-2'> Curiosity Rover </p>

                <p>If you can't find any images, try changing the camera.</p>

                <p>Also a <span className='uppercase text-yellow-300 font-bold'>tip, </span> <span className='uppercase text-red-500 font-bold'>Curiosity</span> was <span className='text-green-400 uppercase font-bold'>active</span> from <span className='text-blue-400 font-bold'> 2012 - present </span></p>
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
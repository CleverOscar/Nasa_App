import React, {useState} from 'react';
import Form from '../../../helpers/Form';
import RoverCarousel from '../../views/Carousel';
import todaysDate from '../../../helpers/date';

export default function Opportunity() {

    const [data, setData] = useState({
        rover: 'opportunity',
        url: "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos",
        date: todaysDate,
        camera: {
            1: 'fhaz',
            2: 'rhaz',
            3: 'navcam',
            4: 'pancam',
            5: 'minites'
        },
        cameraState: '',
        api: process.env.REACT_APP_NASA_POD_API,  
        roverImages: []
    });

    return(
        <div>
             <div className='p-4 my-10 bg-gray-800/80'>
                <p className='text-3xl text-center font-roboto'> Opportunity Rover </p>

                <p className="font-roboto bg-red-900/40 p-2 my-2">If you can't find any images, try changing the camera.</p>

                <p>Also a <span className='uppercase text-yellow-300 font-bold'>tip, </span> <span className='uppercase text-red-500 font-bold'>Spirit</span> was <span className='text-green-400 uppercase font-bold'>active</span> from <span className='text-blue-400 font-bold'> 2004 - 2018 </span></p>
             </div>

            {/* form and photos view here */}

            <div className='flex flex-col justify-around bg-gray-800/80 p-4'>
                <div className=' w-auto'>
                    <Form data={data} setData={setData} />
                        
                </div>

                <div className='w-auto'>
                    <RoverCarousel data={data}/>
                </div>
            </div>
        </div>
    )
}
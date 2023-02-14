import React, {useState} from 'react';
import Form from '../../../../helpers/Form';
import RoverCarousel from '../../views/Carousel';
import todaysDate from '../../../../helpers/date'

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
        roverImages: []
    });
     
    return(
        <div>
            <div className='p-4 my-10 bg-gray-800/80'>

                <p className='text-3xl text-center font-roboto'> 
                    Curiosity Rover 
                </p>

                <p className="font-roboto bg-red-900/40 p-2 my-2">If you can't find any images, there might not be any on that date.</p>

                <p className="">Also a <span className='uppercase text-yellow-300 font-bold'>tip, </span> <span className='uppercase text-red-500 font-bold'>Curiosity</span> was <span className='text-green-400 uppercase font-bold'>active</span> from <span className='text-blue-400 font-bold'> 2012 - present </span></p>
            </div>
            {/* form and photos view here */}

            <div className='flex flex-col justify-around bg-gray-800/80 p-4'>
                
                <div className='w-auto'>
                    <Form data={data} setData={setData} />
                </div>

                <div className='w-auto'>
                    <RoverCarousel data={data}/>
                </div>
            </div>

        </div>
    )
}
import React, {useState} from 'react';
import Form from '../../helpers/Form';
import RoverCarousel from '../views/Carousel';
import todaysDate from '../../helpers/date';

export default function Spirit(){

    const [data, setDate] = useState({
        url: "https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos",
        date: todaysDate,
        camera: {
            1: 'fhaz',
            2: 'rhaz',
            3: 'navcam',
            4: 'pancam',
            5: 'minites'
        },
    });
    
    return(
        <div>
            <p className='text-2xl text-center mt-10'> Spirit Rover </p>

            {/* form and photos view here */}

            <div className='flex flexr-row  justify-around bg-gray-800/40'>
                <div>
                    <Form data={data}/>
                </div>

                <div>
                    <RoverCarousel data={data}/>
                </div>
            </div>
        </div>
    )
}
import React, {useState} from 'react';
import Form from '../../../helpers/Form';
import {Carousel} from 'react-responsive-carousel';
import todaysDate from '../../../helpers/date';

export default function Curiosity(props) {

    const [data, setDate] = useState({
        url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
        date: todaysDate,
    });
    
    return(
        <div>
            <p className='text-2xl text-center mt-10'> Curiosity Rover </p>

            {/* form and photos view here */}

            <div className='flex flexr-row  justify-around bg-gray-800/40'>
                <div>
                    <Form data={data} />
                        
                </div>

                <div>
                    <Carousel />
                </div>
            </div>

        </div>
    )
}
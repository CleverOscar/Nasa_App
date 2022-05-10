import React, {useState} from 'react';
import Form from '../../../helpers/Form';
import RoverCarousel from '../../views/Carousel';
import todaysDate from '../../../helpers/date';

export default function Curiosity(props) {

    const [data, setData] = useState({
        url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
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
    });
    
    return(
        <div>
            <p className='text-2xl text-center mt-10'> Curiosity Rover </p>

            {/* form and photos view here */}

            <div className='flex flexr-row  justify-around bg-gray-800/40'>
                <div>
                    <Form data={data} setData={setData}/>
                        
                </div>

                <div>
                    <RoverCarousel data={data}/>
                </div>
            </div>

        </div>
    )
}
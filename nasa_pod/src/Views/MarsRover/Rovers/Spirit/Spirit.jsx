import React, {useState} from 'react';
import Form from '../../../../helpers/Form';
import RoverCarousel from '../../views/Carousel';
import todaysDate from '../../../../helpers/date';

export default function Spirit(){

   const [data, setData] = useState({
       rover: 'spirit',
       url: `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos`,
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
        <div className='my-10'>

             <div className='flex flex-col lg:flex-row w-full gap-10 items-center bg-gray-800/80 p-4'>
                <div className='w-full text-center'>

                    <p className='text-3xl font-roboto'> Spirit Rover </p>

                    <p className="font-roboto bg-red-900/40 p-2 my-2">If you can't find any images, there might not be any on that date or changing the camera</p>

                    <p><span className='uppercase text-red-500 font-bold'>Spirit</span> was active from <span className='text-blue-400 font-bold'> 2004 - 2010 </span></p>
                </div>


            
                <div className='w-full '>
                    <Form data={data} setData={setData} />
                        
                </div>

                
            </div>

            <div className='w-auto'>
                <RoverCarousel data={data}/>
            </div>
        </div>
    )
}
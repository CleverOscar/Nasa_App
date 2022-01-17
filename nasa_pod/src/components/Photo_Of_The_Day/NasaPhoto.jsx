import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function NasaPhoto(props){

      // init empty array for Nasa Data
  const [nasaData, setNasaData] = useState([]);

      // fetch nasa api 
    useEffect(() => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=JbPskfAcVPpxN602YevCVKqXG7dh7VZ7Yb8qkM2j")
      .then((res) => {
        setNasaData(res.data)
      })
      .catch((error) => {
        console.log(error.message)
      })
    
    }, []);

    return(<div className="mx-6">
        <p className="text-center text-2xl my-6 shadow-lg underline md:shadow-none">
          Astronomy Photo Of The Day
        </p>

        <div className='lg:grid lg:grid-cols-2 lg:items-center'>
            <div>
              <img className="shadow-2xl shadow-blue-400/100 border-4 border-black rounded-xl md:mx-auto md:w-8/12 lg:w-full" src={nasaData.url} alt={nasaData.media_type} />
              <p className='text-lg  italic text-cyan-500 md:text-center md:text-2xl lg:text-3xl py-8'> 
                Name : {nasaData.title}
              </p>
            </div>
            <div>
              <p className='mb-4 text-gray-500 md:text-center md:text-xl lg:text-2xl'>Taken By: {nasaData.copyright}</p>
              <p className='text-base border-double border-8 border-black p-4 rounded-lg shadow-2xl shadow-blue-400/100 lg:text-xl'>{nasaData.explanation}</p>
            </div>
        </div>

    </div>
    )
}

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

    return(
        <div className="mx-6">
            <h1 className="text-center text-2xl my-4 underline">
                Astronomy Photo Of The Day
            </h1>

            <img className="border-4 border-black rounded-xl md:mx-auto md:w-8/12 " src={nasaData.url} alt={nasaData.media_type} />

            <div className="p-4">
              <p className='text-lg  italic text-cyan-500 md:text-center md:text-2xl lg:text-4xl'> 
                Name: {nasaData.title}
              </p>
              <p className='mb-4 text-gray-500 md:text-center md:text-xl lg:text-2xl'>Taken By: {nasaData.copyright}</p>
              <p className='text-lg border-double border-8 border-black p-6 rounded-lg shadow-2xl'>{nasaData.explanation}</p>
            </div>
        </div>
    )
}

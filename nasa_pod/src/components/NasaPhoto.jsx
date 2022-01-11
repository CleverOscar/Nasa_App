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
        <div className="mx-2">
            <h1 className="text-center text-2xl my-4 underline">
                Astronomy Photo Of The Day
            </h1>

            <img className="border-4 border-black rounded-xl" src={nasaData.url} alt={nasaData.media_type} />

            <div className="p-4">
              <p className='text-lg mb-2 italic text-cyan-500'> 
                Name: {nasaData.title}
              </p>
              <p className=''>Taken By: {nasaData.copyright}</p>
              <p className=''>{nasaData.explanation}</p>
            </div>
        </div>
    )
}

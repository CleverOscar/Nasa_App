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
        <div className="">
            <h1 className="text-4xl text-center my-10">
                Astronomy Photo Of The Day
            </h1>

            <img className="mx-auto rounded-xl border-8 border-slate-500 drop-shadow-2xl" src={nasaData.url} alt={nasaData.media_type} />

            <h2 className='text-center text-2xl mt-4'>Name Of Image: {nasaData.title}</h2>
            <p className='text-center'>Taken By: {nasaData.copyright}</p>
            <p className='bg-black text-white p-4 text-xl w-8/12 mx-auto my-10 rounded-xl'>{nasaData.explanation}</p>
        </div>
    )
}

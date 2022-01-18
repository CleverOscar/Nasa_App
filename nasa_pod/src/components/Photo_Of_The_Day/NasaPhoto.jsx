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

    const date = <div className='border-2 border-blue-800 px-4 py-2 rounded-lg'>
        <label > Pick a date to checkout a certain date: </label>
        <input className='border-2 border-black rounded px-4 w-auto' id="myDate" type="date" />
    </div>

    return(<div className="mx-6">
        {date}
        <p className="text-center text-2xl my-6 underline md:shadow-none">
          Astronomy Photo Of The Day
        </p>

        <div className='lg:grid lg:grid-cols-2 gap-10 lg:items-center'>
            <div>
              <p className='hidden lg:block text-2xl py-8 text-center italic text-cyan-500 '> 
                Name : {nasaData.title}
              </p>
              <img className="shadow-2xl  border-4 border-black rounded-xl lg:w-full" src={nasaData.url} alt={nasaData.media_type} />
              <p className='text-xl text-center italic text-cyan-500 md:text-center md:text-2xl py-8 lg:hidden'> 
                Name : {nasaData.title}
              </p>
            </div>
            <div>
              <p className='text-center mb-4 text-gray-500 md:text-xl lg:text-2xl'>Taken By: {nasaData.copyright}</p>
              <p className='font-semibold tracking-wide text-base md:leading-7 md:text-lg border-double border-8 border-black p-4 rounded-lg shadow-2xl'>{nasaData.explanation}</p>
            </div>
        </div>

    </div>
    )
}

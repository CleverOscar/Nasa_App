import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function NasaPhoto(props){
  
  // init empty array for Nasa Data
  let [nasaData, setNasaData] = useState([]);

  // date
  let [dateSetup, setDateSetup] = useState(new Date().toISOString().split('T')[0])

  const api = 'JbPskfAcVPpxN602YevCVKqXG7dh7VZ7Yb8qkM2j';

  let url  = `https://api.nasa.gov/planetary/apod?date=${dateSetup}&api_key=${api}`;

      // fetch nasa api 
    useEffect(() => {
      axios.get(url)
      .then((res) => {
        setNasaData(res.data)
      })
      .catch((error) => {
        console.log(error.message)
      })
    
    }, [url]);
    

  const date = <div className='border-4 border-black px-4 py-2 rounded-lg flex flex-col w-10/12 mx-auto shadow-xl lg:w-4/12'>
      <label  className='text-xl py-2 text-center'> Pick a date to checkout a certain date: </label>
      <input className='border-2 border-black rounded px-4 w-10/12 mx-auto text-xl' id="myDate" type="date" max={new Date().toISOString().split('T')[0]} onChange={getDate}/>
      <button className="mx-auto border-2 border-black rounded-lg px-4 my-6 text-xl" type="sumbit">Search</button>
  </div>

  function getDate(){
    return setDateSetup(document.getElementById("myDate").value)
  }

  const imageMedia = <img className="shadow-2xl mx-auto  border-4 border-black rounded-xl lg:w-full" src={nasaData.url} alt={nasaData.media_type} />

  const videoMedia = <iframe className='border-2 border-black h-96 w-full' title={nasaData.title}  src={nasaData.url}> </iframe>

  function handleSubmit(event){
    event.preventDefault();
    axios.get(url).then(
      (res) => {
        setNasaData(res.data)
      }
    )
  }

    return(<div className="mt-6" >
        <form onSubmit={handleSubmit}>
          {date}
        </form>
        <p className="text-center text-2xl my-6 underline md:shadow-none">
          Astronomy Photo Of The Day
        </p>

        <div className='mx-6 lg:grid lg:grid-cols-2 gap-10 lg:items-center'>
            <div>
              <p className='hidden lg:block text-2xl py-8 text-center italic text-cyan-500 '> 
                Name : {nasaData.title}
              </p>
              {nasaData.media_type === "image" ? imageMedia : nasaData.media_type === "video" ? videoMedia : <>Sorry You need to search a date first in order to see something.</>}
              <p className='text-xl text-center italic text-cyan-500 md:text-center md:text-2xl py-5 lg:hidden'> 
                Name : {nasaData.title}
              </p>
              <p className="text-center  lg:text-xl pb-6">Check out the full HD photo <a className="uppercase italic text-blue-900 underline" href={nasaData.hdurl} target="_blank" rel="noreferrer">here</a></p>
            </div>
            <div>
              <p className='text-center mb-4 text-gray-500 text-xl lg:text-2xl'>Taken By: <span className='underline text-blue-900 italic'>{nasaData.copyright}</span></p>
              <p className='font-semibold tracking-wide text-base md:leading-7 md:text-lg border-double border-8 border-black p-4 rounded-lg shadow-2xl'>{nasaData.explanation}</p>
            </div>
        </div>

    </div>
    )
}

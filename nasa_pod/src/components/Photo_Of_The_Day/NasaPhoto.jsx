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
    
    }, []);
    

  const date = <div className='border-4 border-black px-4 py-2 rounded-lg flex flex-col w-10/12 mx-auto shadow-xl lg:w-1/2'>
      <label  className='text-xl py-2 text-center'> Pick a date to checkout a certain date: </label>
      <input className='border-2 border-black rounded px-4 w-10/12 mx-auto text-xl' id="myDate" type="date" max={new Date().toISOString().split('T')[0]} onChange={getDate}/>
      <button className="mx-auto border-2 border-black rounded-lg px-4 my-6 text-xl" type="sumbit">Search</button>
  </div>

  function getDate(){
    return setDateSetup(document.getElementById("myDate").value)
  }

  function handleSubmit(event){
    event.preventDefault();

    console.log(dateSetup)
    console.log(url)
    axios.get(url).then(
      (res) => {
        setNasaData(res.data)
      }
    )
  }

    return(<div >
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
              <img className="shadow-2xl mx-auto  border-4 border-black rounded-xl lg:w-full" src={nasaData.url} alt={nasaData.media_type} />
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

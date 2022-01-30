import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from './views/Card';

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
    

  const dateForm = <form onSubmit={handleSubmit}>
    <div className='border-4 border-black px-4 py-2 rounded-lg flex flex-col w-10/12 mx-auto shadow-xl lg:w-4/12'>
      <label  className='text-xl py-2 text-center'> Pick a date to checkout a certain date: </label>
      <input className='border-2 border-black rounded px-4 w-10/12 mx-auto text-xl' id="myDate" type="date" max={new Date().toISOString().split('T')[0]} onChange={getDate}/>
      <button className="mx-auto border-2 border-black rounded-lg px-4 my-6 text-xl" type="sumbit">Search</button>
  </div>
  </form>

  function getDate(){
    return setDateSetup(document.getElementById("myDate").value)
  }

  function handleSubmit(event){
    event.preventDefault();
    axios.get(url).then(
      (res) => {
        setNasaData(res.data)
      }
    )
  }

    return(<div className="mt-6 bg-gradient-to-t from-[#1d1135] to-[#7649fe]" >
          {dateForm}
          <Card data={nasaData}/>
          </div>
    )
}

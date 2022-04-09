import React, {useState} from 'react';
import axios from 'axios';
import Card from './views/Card';

export default function NasaPhoto(){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var todaysDate = yyyy + '-' + mm + '-' + dd;

  
  const api = 'JbPskfAcVPpxN602YevCVKqXG7dh7VZ7Yb8qkM2j';

  // init empty array for Nasa Data
  let [nasaData, setNasaData] = useState([]);
  let [date, setDate] = useState(todaysDate);

  let url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${api}`


  function getData(e){
    console.log("Clicked")
    e.preventDefault();
 
    axios.get(url)
      .then(res => {setNasaData(res.data)})
      .catch(err => {console.log(err)})
  }

    return(<div className="mt-6 w-fit mx-auto" >
          {/* {dateForm} */}

          <button className='text-xl bg-white' onClick={getData}> Fetch Data </button>
          <Card data={nasaData}/>  
          </div>
    )
}

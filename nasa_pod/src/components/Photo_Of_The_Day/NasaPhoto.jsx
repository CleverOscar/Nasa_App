import React, {useState} from 'react';
import axios from 'axios';
import Card from './views/Card';

export default function NasaPhoto(){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var todaysDate = yyyy + '-' + mm + '-' + dd;

  // api key
  const api = 'JbPskfAcVPpxN602YevCVKqXG7dh7VZ7Yb8qkM2j';

  // init empty array for Nasa Data
  let [nasaData, setNasaData] = useState([]);
  let [date, setDate] = useState(todaysDate);

  // nasa api url
  let url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${api}`

  // fetch data functoin
  function getData(e){
    console.log("Clicked")
    e.preventDefault();
 
    axios.get(url)
      .then(res => {setNasaData(res.data)})
      .catch(err => {console.log(err)})
  }

    return(<div className="mt-6 w-11/12 mx-auto flex flex-col" >
            {/* {dateForm} */}

            {/* button to fetch data */}
            <button className='text-xl bg-white my-4 outline outline-4 bg-blue-400/50 text-white outline-blue-600 w-1/3 md:w-1/4 mx-auto px-2' onClick={getData}> Photo Of The Day </button>

            {/* display fetched data */}
            <Card data={nasaData}/> 

          </div>
    )
}

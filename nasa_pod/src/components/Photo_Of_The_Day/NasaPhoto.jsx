import React, {useState} from 'react';
import axios from 'axios';
import OptionsTab from './views/OptionsTab';



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


    return(<div className="mt-6 w-11/12 mx-auto flex flex-col" >
            {/* {dateForm} */}

            {/* button to fetch data */}

            {/* display fetched data */}
            {/* <Card data={nasaData}/>  */}


           <OptionsTab />


          </div>
    )
}

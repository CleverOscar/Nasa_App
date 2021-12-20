import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

import Navbar from './components/Navbar';

import NasaPhoto from './components/NasaPhoto';



function App() {

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

  return (
    <div className="container mx-auto">

      <Navbar />

      <NasaPhoto data={nasaData}/>
    </div>
  );
}

export default App;
 
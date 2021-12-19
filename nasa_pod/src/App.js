import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import env from 'react-dotenv';

function App() {

  // init empty array for Nasa Data
  const [nasaData, setNasaData] = useState([]);

  // fetch nasa api 
  const nasaApi = useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?", 
    { 
      headers: 
      {  
        "Authorization": env.REACT_APP_NASA_API 
      } 
    })
    .then((res) => {
      console.log(res.data)
    })
    .catch((error) => {
      console.log(error.message)
    })
  
  }, []);

  console.log("api", window.env.REACT_APP_NASA_API)

  return (
    <div className="container mx-auto">
      <header >
        <h1>Nasa Photo Of The Day</h1>
      </header>
    </div>
  );
}

export default App;

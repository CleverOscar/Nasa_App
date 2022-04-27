import React, {useState} from 'react';
import axios from 'axios'

function PhotoOfTheDay(){

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


    const photo = <div className='w-full mx-auto flex flex-col'>
                        <p className="text-2xl text-center my-4 font-[roboto]">{nasaData.title}</p>
                        <img className='mx-auto w-full' src={nasaData.url} alt=""/>
                        
                            <div className="text-xl p-2 flex flex-row justify-around font-[chakara]">
                                <p>{nasaData.date}</p>
                                {nasaData.copyright === '' ? <p>Taken By: {nasaData.copyright}</p> :  <p>No Author</p> }
                            </div>
                            
                        <p className="text-lg md:text-xl md:tracking-widest p-3 bg-gray-500/25">{nasaData.explanation}</p>

                        <p className="text-center mt-3 text-lg md:text-xl">HD Photo  
                            <a className="uppercase text-blue-600" href={nasaData.hdurl} target="_blank" rel="noreferrer"> here</a>
                        </p>
                        
                    </div>

    function getData(e) {
        e.preventDefault();

        console.log("Clicked the fetch button")

        axios.get(url).then( (response) => setNasaData(response.data) ).catch( err => err.message )

    }

     
    return (
        <div className='text-white flex flex-col'>

            <button className=' 
                text-xl 
                bg-white 
                my-4 
                outline 
                outline-4 
                bg-blue-400/70 
                text-white 
                outline-blue-600 
                w-1/3 
                md:w-1/4 
                mx-auto 
                px-2
                rounded
                
                ' 
            
                onClick={getData}

             > Search for photo  </button>

            {nasaData.length === 0 ? <p className="text-center p-2 text-3xl border-4 border-black bg-gray-800/70">Please click on the search button to see what today's photo of the day is! </p> : photo}
        </div>
    )
}

export default PhotoOfTheDay;
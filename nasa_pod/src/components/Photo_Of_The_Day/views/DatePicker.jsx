import React, {useState} from 'react';
import axios from 'axios'

export default function DatePicker(){


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var todaysDate = yyyy + '-' + mm + '-' + dd;


    const [maxDate] = useState(todaysDate)

    const [date, setDate] = useState('');

    const [nasaData, setNasaData] = useState([]);

    // api key
    const api = 'JbPskfAcVPpxN602YevCVKqXG7dh7VZ7Yb8qkM2j';
    
    // nasa api url
    let url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${api}`

    function dateValue(e) {
        e.preventDefault();
        setDate(e.target.value)
        console.log(date)
    }

    function getPhoto(e){
        e.preventDefault()
        
        axios.get(url).then( (response) => setNasaData(response.data) ).catch( err => err.message )

    }

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

    const video = <div className='w-full mx-auto flex flex-col'>
        

        <p className="text-2xl text-center my-4 font-[roboto]">{nasaData.title}</p>
        
            <iframe className="h-96" src={nasaData.url} />
             

            <div className="text-xl p-2 flex flex-row justify-around font-[chakara]">
                <p>{nasaData.date}</p>
                {nasaData.copyright === '' ? <p>Taken By: {nasaData.copyright}</p> :  <p>No Author</p> }
            </div>
            
        <p className="text-lg md:text-xl md:tracking-widest p-3 bg-gray-500/25">{nasaData.explanation}</p>

        <p className="text-center mt-3 text-lg md:text-xl">HD Photo  
            <a className="uppercase text-blue-600" href={nasaData.hdurl} target="_blank" rel="noreferrer"> here</a>
        </p> 
    </div>

    const media = <div>
        {nasaData.media_type === 'image' ? photo : video}
    </div>


    

    return(
        <div>

            <form className='bg-black flex flex-col mt-4' onSubmit={getPhoto}>
                <label className='text-lg flex flex-row justify-around py-2 text-2xl'>
                    Please Pick A Date: 

                    <input className='text-black w-1/3 text-center ' type="date" name="photo-date" onChange={dateValue} max={maxDate}/>
                </label>

                
                <button className="w-1/4 mx-auto my-8 px-3 py-2 bg-gray-600">submit</button>
                
            </form>


            {nasaData.length === 0 ? <p className="text-center p-2 my-4 text-2xl border-4 border-black bg-gray-800/70">Please pick a date on the calendar and then hit the search button for a result!</p> : media}

        </div>

    )
}
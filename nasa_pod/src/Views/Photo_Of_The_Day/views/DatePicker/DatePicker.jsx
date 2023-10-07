import React, {useState} from 'react';
import axios from 'axios'
import Photo from '../../../SubViews/Photo';
import { Info } from '../../../Micro_Components/Info';


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
    const api = process.env.REACT_APP_API_KEY; 
    
    // nasa api url
    let url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${api}`

    function dateValue(e) {
        e.preventDefault();
        setDate(e.target.value)
    }

    function getPhoto(e){
        e.preventDefault()
        
        axios.get(url).then( (response) => setNasaData(response.data) ).catch( err => err.message )

    }


    const video = <div className='w-full mx-auto flex flex-col font-code'>
        

        <p className="text-2xl text-center my-4 ">{nasaData.title}</p>
        
            <iframe title={nasaData.title} className="h-96" src={nasaData.url} />
             

            <div className="text-xl p-2 flex flex-row justify-around ">
                <p>{nasaData.date}</p>
                {nasaData.copyright === '' ? <p>Taken By: {nasaData.copyright}</p> :  <p>No Author</p> }
            </div>
            
        <p className="text-lg md:text-xl md:tracking-widest p-3 bg-gray-500/25">{nasaData.explanation}</p>

        <p className="text-center mt-3 text-lg md:text-xl">HD Photo  
            <a className="uppercase text-blue-600" href={nasaData.hdurl} target="_blank" rel="noreferrer"> here</a>
        </p> 
    </div>

    const media = <div>
        {nasaData.media_type === 'image' ? <Photo data={nasaData} /> : video}
    </div>


    

    return(
        <div>


            {nasaData.length === 0 ? <Info /> : media}

            <form className=' flex flex-col my-10  p-4 mx-auto dark-palette' onSubmit={getPhoto}>

                <label className='flex flex-col md:flex-row gap-4 justify-around lg:justify-between py-2 '>
                    <span className=" text-center text-xl lg:text-2xl lg:mx-auto underline">
                        Please Pick A Date:
                    </span> 

                    <input className='text-black w-full text-center text-2xl md:w-1/2 font-bold' type="date" name="photo-date" onChange={dateValue} max={maxDate}/>
                </label>

                
                <button className="font-bold w-1/3 mx-auto mt-10 px-3 py-2 bg-gray-600 text-lg hover:bg-gray-800 rounded-md md:text-xl  ">submit</button>
                
            </form>


 
        </div>

    )
}
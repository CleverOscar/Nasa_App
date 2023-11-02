import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Info } from '../../../Micro_Components/Info';
import Photo from '../../../Micro_Components/Photo';
import Loading from '../../../../Components/Loading/Loading';


export default function DatePicker(){


    // Current date 
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var todaysDate = yyyy + '-' + mm + '-' + dd;

    // Max Date Pick
    const [maxDate] = useState(todaysDate)

    // Current Date
    const [date, setDate] = useState('');

    // Data state
    const [nasaData, setNasaData] = useState([]);

    //loading effect
    const [loading, setLoading] = useState(false);

    // api key
    const api = process.env.REACT_APP_API_KEY; 
    
    // nasa api url
    let url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${api}`


    // Getting users date
    function dateValue(e) {
        e.preventDefault();
        setDate(e.target.value)
    }
    // Fetch Photo
    function getPhoto(e){
        e.preventDefault()
        
        setLoading(true);
        setTimeout(()=> {
            axios.get(url).then((response) => { setLoading(false); setNasaData(response.data)} ).catch( err => err.message )
        }, 2000)

    }


    const video = <div className='w-full mx-auto flex flex-col font-code dark-palette mt-12'>
        

        <p className="text-2xl text-center my-4 ">{nasaData.title}</p>
        
            <iframe title={nasaData.title} className="h-96" src={nasaData.url} />
             

            <div className="text-xl p-2 flex flex-row justify-around ">
                <p>{nasaData.date}</p>
                {nasaData.copyright === '' ? <p>Taken By: {nasaData.copyright}</p> :  <p>No Author</p> }
            </div>
        
        <p className="text-lg md:text-xl md:tracking-widest p-3 ">{nasaData.explanation}</p>

        <p className="text-center mb-4 text-lg md:text-xl">Video Source:  
            <a className="uppercase text-blue-600" href={nasaData.url} target="_blank" rel="noreferrer"> here</a>
        </p> 
    </div>

    
    // media element displaying either the photo or the video element
    const media = <div>
        {  nasaData.media_type === 'image' ? <Photo data={nasaData} /> : video }
    </div>
    

    return(
        <div>


            { loading ? <p className='text-2xl text-center my-20 dark-palette w-3/12 p-4 mx-auto '>Loading...</p> : nasaData.length === 0 ? <Info /> : media }

            <form className='max-w-md flex flex-col my-10 p-4 mx-auto dark-palette text-xl' onSubmit={getPhoto}>

                <label className='flex flex-col md:flex-row gap-2 justify-around lg:justify-between py-2 '>

                    <span className="self-center">
                        Please Pick A Date:
                    </span> 

                    <input className='dark-palette p-2' type="date" name="photo-date" onChange={dateValue} max={maxDate}/>

                </label>

                
                <button className=" w-1/3 mx-auto mt-10 px-3 py-2 dark-palette hover:bg-gray-800 rounded-md ">submit</button>
                
            </form>


 
        </div>

    )
}
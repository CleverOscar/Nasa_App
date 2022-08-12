import React, {useState} from 'react';
import axios from 'axios';
import Photo from '../../../SubViews/Photo';
import ClickInfo from '../../../SubViews/ClickInfo';

export default function RandomPhoto() {

    const [randomPhoto, setRandomPhoto] = useState([]);

    // api key
    const api = process.env.REACT_APP_API_KEY;

    let url = `https://api.nasa.gov/planetary/apod?count=1&api_key=${api}`


    function fetchData(e){
        e.preventDefault();

        axios.get(url).then(res => setRandomPhoto(res.data[0])).catch(err => err.message)
    }                   

    return(
        <div className='flex flex-col '>



           

            {
                randomPhoto.length > -1 
                    ? <ClickInfo />
                    : <Photo data={randomPhoto} />
            }

            <button onClick={fetchData} className='
                mb-10
                text-xl 
                bg-white  
                outline 
                outline-4 
                bg-blue-400/70 
                text-white
                font-light 
                outline-blue-600 
                w-1/2 
                hover:bg-blue-800/70
                md:w-1/4 
                mx-auto 
                p-2
                rounded' > 
            Search Random Photo 
            </button>

            

            
        </div>
    )
}
import React, {useState} from 'react';
import axios from 'axios';
import Photo from '../../../SubViews/Photo';
import { Info } from '../../../Micro_Components/Info';

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
                    ? <Info />
                    : <Photo data={randomPhoto} />
            }

            <button onClick={fetchData} className='
                dark-palette
                mt-12
                w-1/2
                md:w-1/4
                mx-auto
                text-xl
                p-2
                ' > 
            Search Random Photo 
            </button>

            

            
        </div>
    )
}
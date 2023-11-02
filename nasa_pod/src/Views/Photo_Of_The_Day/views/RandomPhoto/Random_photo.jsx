import React, {useState} from 'react';
import axios from 'axios';
import { Info } from '../../../Micro_Components/Info';
import Photo from '../../../Micro_Components/Photo';

export default function RandomPhoto() {

    // component photo state
    const [randomPhoto, setRandomPhoto] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // api key and url
    const api = process.env.REACT_APP_API_KEY;
    let url = `https://api.nasa.gov/planetary/apod?count=1&api_key=${api}`

    // when the user click the button fetch the photo of the day
    function fetchData(e){
        e.preventDefault();
        setIsLoading(true);
        setTimeout(()=> {

            axios.get(url).then(res => {setIsLoading(false);setRandomPhoto(res.data[0])}).catch(err => err.message);
        }, 2000)

    }                   

    return(
        <div className='flex flex-col '>

            {
                isLoading ?  <p className='text-2xl text-center my-20 dark-palette w-3/12 p-4 mx-auto '>Loading...</p> : randomPhoto.length === 0 
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
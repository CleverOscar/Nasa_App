import React, {useState} from 'react';
import axios from 'axios';
import Photo from '../../../SubViews/Photo';

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
                    ? <p className="my-10 font-code text-center font-light p-2 text-2xl border-4 border-black bg-gray-900/70 w-1/2 mx-auto"> Please click on the search button to see a random photo! </p> 
                    : <Photo data={randomPhoto} />
            }

            <button onClick={fetchData} className='
                my-10 
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
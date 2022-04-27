import React, {useState} from 'react';
import axios from 'axios';

export default function RandomPhoto() {

    const [randomPhoto, setRandomPhoto] = useState([]);

    // api key
    const api = 'JbPskfAcVPpxN602YevCVKqXG7dh7VZ7Yb8qkM2j';

    let url = `https://api.nasa.gov/planetary/apod?count=1&api_key=${api}`


    function fetchData(e){
        e.preventDefault();

        axios.get(url).then(res => setRandomPhoto(res.data[0])).catch(err => err.message)
    }

    const randomImage = <div className='w-full mx-auto flex flex-col bg-gray-700/50 border-4 border-white rounded-md'>
                            <img src={randomPhoto.url} alt=""/>
                            <p className="text-2xl text-center my-4 font-[roboto]">{randomPhoto.title}</p>
                            
                                <div className="text-xl p-2 flex flex-row justify-around font-[chakara]">
                                    <p>{randomPhoto.date}</p>
                                    {randomPhoto.copyright === '' ? <p>Taken By: {randomPhoto.copyright}</p> :  <p>No Author</p> }
                                </div>
                                
                            <p className="text-lg md:text-xl md:tracking-widest p-3">{randomPhoto.explanation}</p>

                            <p className="text-center mt-3 text-lg md:text-xl">HD Photo  
                                <a className="uppercase text-blue-600" href={randomPhoto.hdurl} target="_blank" rel="noreferrer"> here</a>
                            </p>
                            
                        </div>

    return(
        <div className='flex flex-col'>
            <button onClick={fetchData} className=' 
                text-xl 
                bg-white 
                my-4 
                outline 
                outline-4 
                bg-blue-400/70 
                text-white 
                outline-blue-600 
                w-1/2 
                md:w-1/4 
                mx-auto 
                px-2
                rounded
                ' > Search Random Photo </button>

            {randomPhoto.length > -1 ? <p className="text-center p-2 text-2xl border-4 border-black bg-gray-800/70"> Please click on the search button to see a random photo! </p> : randomImage}

            
        </div>
    )
}
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

    const randomImage = <div className='w-full mx-auto flex flex-col'>
                            <p className="text-2xl text-center my-4 font-[roboto]">{randomPhoto.title}</p>
                            <img src={randomPhoto.url} alt=""/>
                            
                                <div className="text-xl p-2 flex flex-row justify-around font-[chakara]">
                                    <p>{randomPhoto.date}</p>
                                    {randomPhoto.copyright === '' ? <p>Taken By: {randomPhoto.copyright}</p> :  <p>No Author</p> }
                                </div>
                                
                            <p className="text-lg md:text-xl md:tracking-widest p-3 bg-gray-500/25">{randomPhoto.explanation}</p>

                            <p className="text-center mt-3 text-lg md:text-xl">HD Photo  
                                <a className="uppercase text-blue-600" href={randomPhoto.hdurl} target="_blank" rel="noreferrer"> here</a>
                            </p>
                            
                        </div>

    return(
        <div className='flex flex-col'>
            <button onClick={fetchData} className="w-1/3 mx-auto my-4 bg-red-900/80"> Fetch Data </button>

            {randomPhoto.length > -1 ? <p className="text-center text-xl">No Data</p> : randomImage}

            
        </div>
    )
}
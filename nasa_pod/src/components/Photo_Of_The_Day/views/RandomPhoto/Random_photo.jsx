import React, {useState} from 'react';
import axios from 'axios';

export default function RandomPhoto() {

    const [randomPhoto, setRandomPhoto] = useState([]);

    // api key
    const api = process.env.REACT_APP_API_KEY;

    let url = `https://api.nasa.gov/planetary/apod?count=1&api_key=${api}`


    function fetchData(e){
        e.preventDefault();

        axios.get(url).then(res => setRandomPhoto(res.data[0])).catch(err => err.message)
    }

    const randomImage = <div className='w-full mx-auto flex flex-col bg-gray-700/50 border-4 border-white rounded-md my-10 font-code'>
                            <img src={randomPhoto.url} alt=""/>
                            <p className="text-2xl text-center my-4 ">{randomPhoto.title}</p>
                            
                                <div className="text-xl p-2 flex flex-row justify-around ">
                                    <p>{randomPhoto.date}</p>
                                    {randomPhoto.copyright === '' ? <p>Taken By: {randomPhoto.copyright}</p> :  <p>No Author</p> }
                                </div>
                                
                            <p className="text-lg md:text-xl md:tracking-widest p-3">{randomPhoto.explanation}</p>

                            <p className="text-center mt-3 text-lg md:text-xl">HD Photo  
                                <a className="uppercase text-blue-600" href={randomPhoto.hdurl} target="_blank" rel="noreferrer"> here</a>
                            </p>
                            
                        </div>
                        

    return(
        <div className='flex flex-col '>
            {randomPhoto.length > -1 ? <p className="my-10 font-code text-center font-light p-2 text-2xl border-4 border-black bg-gray-900/70 w-1/2 mx-auto"> Please click on the search button to see a random photo! </p> : randomImage}

            <button onClick={fetchData} className=' 
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
                rounded
                ' > Search Random Photo </button>

            

            
        </div>
    )
}
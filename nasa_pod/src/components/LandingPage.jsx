import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function LandingPage(){

    const [data, setData] = useState([]);

    // useEffect(() => {
    //      axios.get("https://api.nasa.gov/planetary/apod?api_key=JbPskfAcVPpxN602YevCVKqXG7dh7VZ7Yb8qkM2j")
    //     .then((res) => {
    //     setData(res.data)
    //     })
    //     .catch((error) => {
    //     console.log(error.message)
    //     })
    // })

    return(
        <div className='border-4 border-black mx-4 my-8 bg-gray-200'>
            <h2 className='my-6 text-center text-3xl underline'>
                Nasa API Portal Application
            </h2>

            <p className='px-6 pb-6 text-2xl'>
            A React App that fetches data from NASA's API portal. Displaying photos and videos from Earth, Mars, Stars, Galaxies, and more!
            </p>
        </div>
    )
}
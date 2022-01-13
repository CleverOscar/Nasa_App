import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function MarsRover(){

    let [searchParams, setSerachParams ] = useState("");
    
    const [roverImages, setRoverImages] = useState([]);

    const api = "JbPskfAcVPpxN602YevCVKqXG7dh7VZ7Yb8qkM2j"

    const front_camera  = 'fhaz';
    const back_camera = 'rhaz';
    const mast_camera = 'mast';

    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${front_camera}&api_key=${api}`;

    useEffect(()=>{
        axios.get(url)
             .then((response) => {setRoverImages(response.data.photos)})
             .catch((error) => {console.log(error)})
    }, []);

    const images = roverImages.map(item => <div>
        <p>{item.id}</p>
        <img src={item.img_src} />

    </div>)

    function handleName(event){
        event.preventDefault();
        console.log(setSerachParams(event.target.value));
    }

    function handleChange(event){
        event.preventDefault();
        console.log(setSerachParams(event.target.value));
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(searchParams);
    }

    return(
        <div>
            {images}

            <form onSubmit={handleSubmit} className=" my-10">
                <input className="border-2" onChange={handleChange} type="text" placeholder="search"/>
                <input className="border-2" onChange={handleChange} type="text" placeholder="date" />
            </form>
        </div>
    )
}


// ids
// sol = day
// image src
// camera name
// rover landing date
import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function MarsRover(){
    
    const [roverImages, setRoverImages] = useState([]);

    const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=JbPskfAcVPpxN602YevCVKqXG7dh7VZ7Yb8qkM2j';

    
    useEffect(()=>{
        axios.get(url)
             .then((response) => {setRoverImages(response.data.photos)})
             .catch((error) => {console.log(error)})
    }, []);

    const images = roverImages.map(item => <div>
        <p>{item.id}</p>
        <img src={item.img_src} />

    </div>)

    console.log(images)

    return(
        <div>
            {images}
        </div>
    )
}


// ids
// sol = day
// image src
// camera name
// rover landing date
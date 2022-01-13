import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function MarsRover(){

    const cameras = [
        {
            id: 1,
            camera: "fhaz"
        },
        {
            id: 2,
            camera: "rhaz"
        },
        {
            id: 3,
            camera: "mast"
        },
        {
            id: 4,
            camera: "chemcam"
        },
        {
            id: 5,
            camera: "mahli"
        },
        {
            id: 6,
            camera: "mardi"
        },
        {
            id: 7,
            camera: "navcam"
        },
        {
            id: 8,
            camera: "pancam"
        },
        {
            id: 9,
            camera: "minites"
        },
    ];

    let [searchParams, setSerachParams ] = useState("");
    
    const [roverImages, setRoverImages] = useState([]);

    const api = "JbPskfAcVPpxN602YevCVKqXG7dh7VZ7Yb8qkM2j"

    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${api}`;

    useEffect(()=>{
        axios.get(url)
             .then((response) => {setRoverImages(response.data.photos)})
             .catch((error) => {console.log(error)})
    }, []);

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

    const images = roverImages.map(item => 
    <div className="border-4 my-10" key={item.id}>
        <p>{item.id}</p>
        <img src={item.img_src} />
    </div>)

    const cameraOption = cameras.map(camera => console.log(camera))

    return(
        <div className="w-10/12 mx-auto">
            <form onSubmit={handleSubmit} className=" my-6">
                <input className="border-2" onChange={handleChange} type="text" placeholder="search"/>
                <input className="border-2" onChange={handleChange} type="text" placeholder="date" />
                <div>
                    <label>
                        Camera
                    </label>
                    <select id="cameras">
\                       
                    </select>
                </div>
            </form>
            
            {images}
          
        </div>
    )
}
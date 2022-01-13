import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function MarsRover(){

    const cameras = [
        {
            id: 1,
            camera_name: "fhaz"
        },
        {
            id: 2,
            camera_name: "rhaz"
        },
        {
            id: 3,
            camera_name: "mast"
        },
        {
            id: 4,
            camera_name: "chemcam"
        },
        {
            id: 5,
            camera_name: "mahli"
        },
        {
            id: 6,
            camera_name: "mardi"
        },
        {
            id: 7,
            camera_name: "navcam"
        },
        {
            id: 8,
            camera_name: "pancam"
        },
        {
            id: 9,
            camera_name: "minites"
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

    const images = roverImages.map(item => 
    <div className="border-4 my-10" key={item.id}>
        <p>{item.id}</p>
        <img alt={item.name} src={item.img_src} />
    </div>)

    const cameraOption = cameras.map(camera => <option className="" key={camera.id} value={camera.camera_name}>{camera.camera_name}</option>)

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
        <div className="w-10/12 mx-auto">
            <form onSubmit={handleSubmit} className=" my-6">
                <div className="w-auto flex flex-row">
                    <label className="border-2 px-10 mr-6">
                        Camera Angle
                    </label>
                    <select className="border w-auto text-center" id="cameras">
\                       {cameraOption}
                    </select>
                </div>
            </form>
            
            {images}
          
        </div>
    )
}
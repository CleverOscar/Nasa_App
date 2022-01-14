import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function MarsRover(){

    // Images State
    const [roverImages, setRoverImages] = useState([]);

    // camera state
    let [searchParams, setSerachParams ] = useState('');

    let [earthDate, setEarthDate] = useState('');

    // camera names
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

    // Data fetched
    useEffect(()=>{
        
    }, []);

    // Key
    const api = "JbPskfAcVPpxN602YevCVKqXG7dh7VZ7Yb8qkM2j"

    // url 
    let  url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-6-4&camera=${searchParams}&api_key=${api}`;

    function getData(){
        axios.get(url)
             .then((response) => {setRoverImages(response.data.photos)})
             .catch((error) => {console.log(error)})
    }
    
    function handleSubmit(event){
        event.preventDefault();
        
    }
    
    function getValue(event){
        event.preventDefault();
        setSerachParams(event.target.value)
        
        axios.get(url)
             .then((response) => {setRoverImages(response.data.photos)})
             .catch((error) => {console.log(error)})
        console.log(roverImages);

        return console.log(setRoverImages)
    }

       const images = roverImages.map(item => 
    <div className="border-4 my-10" key={item.id}>
        <p>{item.id}</p>
        <img alt={item.name} src={item.img_src} />
    </div>)

    const cameraOption = cameras.map(camera => 
        <option className="" key={camera.id} value={camera.camera_name}>
            {camera.camera_name}
        </option>)


    return(
        <div className="w-10/12 mx-auto">
            <form className=" my-6">
                <div className="w-auto flex flex-row">
                    <label className="border-2 px-10 mr-6">
                        Camera Angle
                    </label>
                    <select onChange={getValue} className="border w-auto text-center" id="cameras">
                       {cameraOption}
                    </select>
                </div>
                <button type="submit" onClick={getValue}>Search</button>
            </form>
            
            {images}
            
        </div>
    )
}
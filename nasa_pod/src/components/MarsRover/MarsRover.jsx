import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function MarsRover(){

    // Images State
    const [roverImages, setRoverImages] = useState([]);

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

    // camera state
    let [cameraState, setCameraState ] = useState(null);

    const [pageNumebr, setPageNumber] = useState(1);

    // Key
    const api = "JbPskfAcVPpxN602YevCVKqXG7dh7VZ7Yb8qkM2j"

    // url 
    let  url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-6-4&page=${pageNumebr}&api_key=${api}`;

    // https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-6-4&page=${pageNumebr}&camera=${cameraState}&api_key=${api}


    console.log(url)

    useEffect(() => {
        
    },[])
    
    function handleSubmit(event){
        event.preventDefault();
        
    }


    
    function getValue(event){
        event.preventDefault();
        setCameraState(event.target.value)
        
        axios.get(url)
             .then((response) => {setRoverImages(response.data.photos)})
             .catch((error) => {console.log(error)})
        console.log(roverImages);

        return console.log(setRoverImages)
    }

       const images = roverImages.map(item => 
            <div className="border-4 my-10" key={item.id}>
                <p>Rover: {item.rover.name}</p>
                <p>Camera Name: {item.camera.full_name}</p>
                <p>Solar Day: {item.sol}</p>
                <p>Earth Day: {item.earth_date}</p>
                <img alt={item.name} src={item.img_src} />
            </div>
        )

    const cameraOption = cameras.map(camera => 
        <option className="" key={camera.id} selected={camera.camera_name}>
            {camera.camera_name}
        </option>)


    return(
        <div className="w-10/12 mx-auto">
            <form className=" my-6" onSubmit={handleSubmit}>
                <div className="w-auto flex flex-row">
                    <label className="border-2 px-10 mr-6">
                        Camera Viewing
                    </label>
                    <select name={getValue} onChange={getValue} className="border w-auto text-center" id="cameras">
                       {cameraOption}
                    </select>
                </div>
                <button type="button" onClick={getValue}>Search</button>
            </form>
            
            {images}
            
        </div>
    )
}
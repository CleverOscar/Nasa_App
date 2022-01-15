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
    let [cameraState, setCameraState ] = useState('');

    const [pageNumebr, setPageNumber] = useState(1);

    // Key
    const api = "JbPskfAcVPpxN602YevCVKqXG7dh7VZ7Yb8qkM2j"

    // Date
    let [yourDate, setYourDate] = useState(new Date().toISOString().split('T')[0]);

    // url 
    let  url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${yourDate}&page=${pageNumebr}&api_key=${api}`;

    // sets up data when loaading page up

    useEffect(() => {
       axios.get(url).then(
           (res)=>{
            setRoverImages(res.data.photos)
           }
       )
    },[])

    const images = roverImages.map(item => 
        <div className="border-4 mt-10" key={item.id}>
            <p>Rover: {item.rover.name}</p>
            <p>Camera Name: {item.camera.full_name}</p>
            <p>Solar Day: {item.sol}</p>
            <p>Earth Day: {item.earth_date}</p>
            <img alt={item.name} src={item.img_src} />
        </div>
    )

    const cameraOption = cameras.map(camera => 
        <option key={camera.id} defaultValue={camera.camera_name}>
            {camera.camera_name}
        </option>)

    
    const updateDate = <div>
        <label className='px-2'>
        Date: 
        </label>
        <input id='myDate' type="date" onChange={getDate}/>
    </div>
    
    const cameraUpdate = <div>
                            <label className="px-10 mr-6">
                                    Camera
                                </label>
                                <select className="border w-auto text-center text-red-800" id="cameras" onChange={getCameraName}>
                                {cameraOption}
                                </select>
                        </div>

    const manual = <ol>
                        <li>
                            Step 1: Pick a date either present day or earlier.     
                        </li>
                        <li>
                            Step 2: Pick a camera to view
                        </li>
                        <li>
                            Step 3: Hit the submit button to search database
                        </li>
                    </ol>

    function getDate(){
        return setYourDate(document.getElementById("myDate").value);
    }

    function handleSubmit(event){
        event.preventDefault();
        
        axios.get(url).then(
            (res)=>{
             setRoverImages(res.data.photos)
            }
        )

        return console.log("Submitted")
    }
    
    function getCameraName(){
        setCameraState(document.getElementById("cameras").value);
        return(console.log(cameraState));
    }


    return(
        <div className=" mt-8 w-10/12 mx-auto">
            {manual}
            <form className="w-auto flex flex-row my-6" onSubmit={handleSubmit}>
                <div className="mx-auto">
                    {updateDate}
                    {cameraUpdate}
                </div>
                <button className="mx-auto border-2 border-blue-500 px-4" type="sumbit">Search</button>
            </form>
            {images}
        </div>
    )
}
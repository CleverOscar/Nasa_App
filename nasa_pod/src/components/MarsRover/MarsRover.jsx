import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import Images from './Images';

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
    let [cameraState, setCameraState ] = useState();

    const [pageNumeber] = useState(1);

    // Key
    const api = "JbPskfAcVPpxN602YevCVKqXG7dh7VZ7Yb8qkM2j"

    // Date
    let [yourDate, setYourDate] = useState(new Date().toISOString().split('T')[0]);

    // url 
    let  url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${yourDate}&page=${pageNumeber}&api_key=${api}`;

    // sets up data when loaading page up

    useEffect(() => {
       axios.get(url).then(
           (res)=>{
            setRoverImages(res.data.photos)
           }
       )
    },[url])

    const cameraOption = cameras.map(camera => 
        <option key={camera.id} defaultValue={camera.camera_name}>
            {camera.camera_name}
        </option>)

    
    const updateDate = <div className="flex flex-col md:flex-row items-center">
        <label className='px-2 md:w-1/2 underline'>
        Date 
        </label>
        <input className="border-2 border-black px-3 w-full text-center" max={new Date().toISOString().split('T')[0]} id='myDate' type="date"  onChange={getDate}/>
    </div>
    
    const cameraUpdate = <div className="flex flex-col md:flex-row py-2">
                            <label className="mx-auto px-2 w-1/2 underline">
                                    Camera
                            </label>
                            <select className=" border-2 px-3 border-black w-full text-center text-red-900 uppercase" id="cameras" onChange={getCameraName}>
                            {cameraOption}
                            </select>
                        </div>

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
        debugger
        setCameraState(document.getElementById("cameras").value);
        return(console.log(cameraState));
    }


    return(
        <div className="mt-8 w-10/12 mx-auto">
            <div className="w-full mx-auto lg:flex lg:flex-row md:w-8/12 lg:justify-between lg:items-center">
                <form className="w-10/12 mx-auto flex flex-col my-6 border-4 border-black rounded-xl shadow-lg px-4 py-3 " onSubmit={handleSubmit}>
                    <div className="mx-auto w-full">
                        {updateDate}
                        {cameraUpdate}
                    </div>
                    <button className="mx-auto border-2 border-black px-2 mt-4" type="sumbit">Search</button>
                </form>


            </div>

           {roverImages.length > 0 ? (<div> 
                <p> Rover Name {roverImages[0].rover.name}</p>
                <p>Rover Launch date: {roverImages[0].rover.launch_date}</p>
                <p>Landing Date: {roverImages[0].rover.landing_date}</p>
                <p>Camera currently viewing: {roverImages[0].camera.full_name}</p>
                <Pagination data={roverImages} title={"pagination"} pageLimit={5} dataLimit={10} RenderComponent={Images}/>
            </div>
           
           ) : (<p className="text-center text-xl">Pick a date to search database for images or video. If nothing loads after hitting search then that means there are no photos for that date yet or none at all for that date.</p>)}

            
        </div>
    )
}
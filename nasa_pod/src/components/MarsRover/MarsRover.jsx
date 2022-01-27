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

    
    const updateDate = <div className="flex flex-col items-center md:flex-row py-6">
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

    const infoCard = <div className='mx-auto border-4 border-black font-semibold rounded-lg p-4 bg-gray-200 shadow-2xl md:w-10/12 md:text-2xl lg:w-1/2'>
                        <p>Rover Name: <span className='text-red-600 uppercase'>{roverImages[0].rover.name}</span></p>
                        <p>Rover launch date: <span className='text-blue-600'>{roverImages[0].rover.launch_date}</span></p>
                        <p>Rover landing date: <span className='text-orange-600'>{roverImages[0].rover.landing_date}</span></p>
                        <p>Rover status: <span className='text-green-600 uppercase'>{roverImages[0].rover.status}</span></p>
                        <p>Rover camera view: {roverImages[0].camera.full_name}</p>
                        <p>Earth Date: <span className='text-green-500'>{roverImages[0].earth_date}</span></p>
                        <p>Day being on mars: <span className='underline text-red-500'>{roverImages[0].sol}</span></p>
                        <p>Images: {roverImages.length}</p>
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
        setCameraState(document.getElementById("cameras").value);
        return(console.log(cameraState));
    }


    return(
        <div className="w-10/12 mx-auto ">
           
                <form className="text-base bg-gray-200 w-full md:text-xl border-4 border-black px-4 py-2 my-6 rounded-lg flex flex-col md:w-10/12 mx-auto shadow-xl lg:w-4/12" onSubmit={handleSubmit}>
                    <div className="mx-auto w-full">
                        {updateDate}
                        {cameraUpdate}
                    </div>
                    <button className="mx-auto bg-white border-2 border-black px-2 mt-4 rounded-md" type="sumbit">Search</button>
                </form>

                {roverImages.length > 0 ? <div>{infoCard}</div> : null}
           

           {roverImages.length > 0 ? (<div> 
                
                <Pagination data={roverImages} title={"pagination"} pageLimit={5} dataLimit={10} RenderComponent={Images}/>
            </div>
           
           ) : (<p className="text-center w-10/12 text-lg md:text-2xl md:w-8/12 lg:w-1/2 mx-auto my-10">Pick a date to search database for images or video. If nothing loads after hitting search then that means there are no photos for that date yet or none at all for that date.</p>)}

            
        </div>
    )
}
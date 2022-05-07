import React, {useState} from 'react';
import axios from 'axios';
import Pagination from './views/Pagination';
import Images from './views/Images';
import InfoCard from './views/InfoCard';
import RoverCarousel from './views/Carousel';

export default function MarsRover(){

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var todaysDate = yyyy + '-' + mm + '-' + dd;

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
    let [cameraState, setCameraState ] = useState(cameras[0].camera_name);

    const [pageNumeber] = useState(1);

    // Key
    const api = "JbPskfAcVPpxN602YevCVKqXG7dh7VZ7Yb8qkM2j"

    // Date
    let [yourDate, setYourDate] = useState(todaysDate);

    // url 
    let  url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${yourDate}&page=${pageNumeber}&api_key=${api}`;
    

    function getDate(e){
        e.preventDefault();
        console.log(e.target.value)
        setYourDate(e.target.value)
    }

    function getCamera(e){
        e.preventDefault();
        console.log(e.target.value)
        setCameraState(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        axios.get(url).then(res => setRoverImages(res.data.photos)).catch(err => console.log(err.message))
        console.log(url)
    }


    return(
        <div className="w-10/12 mx-auto flex flex-col min-h-screen justify-around">
           
            <form className="text-base bg-gray-200 w-full border-4 border-black px-4 py-2 my-6 rounded-lg flex flex-col md:text-xl md:w-10/12 mx-auto shadow-xl lg:w-4/12" onSubmit={handleSubmit}>
                
                <label className=' flex flex-row justify-between  my-2'>
                    Date    
                    <input className="border-2 border-black w-auto text-center" max={todaysDate} id='myDate' type="date"  onChange={getDate}/>
                </label>
                
                <label htmlFor="cameras" className='my-2 w-full flex flex-row justify-between'>
                   <p>Camera Option</p>
                   <select id="cameras" className='w-1/3 text-xl' value={cameraState} onChange={getCamera}>
                          {cameras.map(camera => (<option key={camera.id}>{camera.camera_name}</option>))}
                   </select>
                </label>


                <button className="ml-auto bg-white border-2 border-black px-2 mt-4 rounded-md" type="sumbit">Search</button>
                
            </form>

            {roverImages.length > 0 ? <InfoCard data={roverImages[0]} /> : null}
           

            <RoverCarousel data={roverImages} />
           {/* {roverImages.length > 0 ?
            (<div> <Pagination data={roverImages} title={"pagination"} pageLimit={5} dataLimit={10} RenderComponent={Images}/> </div>) :

            (<p className="text-center w-10/12 text-lg md:text-2xl md:w-8/12 lg:w-1/2 mx-auto">Pick a date to search database for images or video. If nothing loads after hitting search then that means there are no photos for that date yet or none at all for that date.</p>)} */}

            
            
        </div>
    )
}
import React, {useState} from 'react';
import axios from 'axios'
import Photo from '../../../SubViews/Photo';
import ClickInfo from '../../../SubViews/ClickInfo';
import MobilePhoto from '../../../SubViews/MobilePhoto';


function PhotoOfTheDay(){

    // return todays date
    function today(){
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            var todaysDate = yyyy + '-' + mm + '-' + dd;

            return todaysDate
    }

    // api key
    let api = process.env.REACT_APP_API_KEY;

    // init empty array for Nasa Data 
    let [nasaData, setNasaData] = useState([]);
    let [date] = useState(today);

    // nasa api url
    let url = "https://api.nasa.gov/planetary/apod";
    
    
    // event listener function 
    // when the user clicks on the button we want to get todays data
    function getData(e) {
        e.preventDefault();
        console.log("Button Clicked")
        axios.get(url + `?date=${date}` + `&api_key=${api}`).then( (response) => setNasaData(response.data) ).catch( err => err.message )

    }
     
    return (
        <div className='text-white flex flex-col'>

            <div className="md:hidden">
                {nasaData.length === 0 ? <ClickInfo /> : <MobilePhoto data={nasaData} />}
            </div>

            <div className="hidden md:block">
                {   nasaData.length === 0 ? <ClickInfo /> : <Photo data={nasaData} />}
            </div>

             <button className=' 
                text-xl 
                bg-white  
                outline 
                outline-4 
                bg-blue-400/70 
                text-white
                font-light 
                outline-blue-600 
                w-1/2 
                hover:bg-blue-800/70
                md:w-1/4 
                mx-auto 
                p-2
                rounded
                ' 
            
                onClick={getData}

             > Search photo  </button>
             
        </div>
    )
}


export default PhotoOfTheDay;
import React, {useState} from 'react';
import axios from 'axios'
import { Info } from '../../../Micro_Components/Info';
import Photo from '../../../Micro_Components/Photo';

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
    let [loading, setLoading] = useState(false);

    // nasa api url
    let url = "https://api.nasa.gov/planetary/apod";
    
    
    // event listener function 
    // when the user clicks on the button we want to get todays data
    function getData(e) {
        e.preventDefault();
        
        setLoading(true);
        setTimeout(() => {
            axios.get(url + `?date=${date}` + `&api_key=${api}`).then( (response) => {setLoading(false); setNasaData(response.data)} ).catch( err => err.message )
        },3000)
        
    }


    // css 
    let bttn = " mt-12  text-xl dark-palette outline-blue-600 w-1/2 hover:bg-blue-800/70 md:w-1/4 mx-auto p-2 "
     
    return (
        <div className='text-white flex flex-col'>

            <div>
                {loading ? <p className='text-2xl text-center my-20 dark-palette w-3/12 p-4 mx-auto '>Loading...</p> : nasaData.length === 0 ? <Info /> :  <Photo data={nasaData}/> }
            </div>

            <button className={bttn} onClick={getData}> 
                Search photo 
            </button>
             
        </div>
    )
}


export default PhotoOfTheDay;
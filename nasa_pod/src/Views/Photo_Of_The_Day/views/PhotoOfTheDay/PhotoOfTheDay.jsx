import React, {useState, lazy} from 'react';
import axios from 'axios'
import Photo from '../../../SubViews/Photo';


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
    const api = process.env.REACT_APP_API_KEY;

    // init empty array for Nasa Data 
    let [nasaData, setNasaData] = useState([]);
    let [date] = useState(today);

    // nasa api url
    let url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${api}`
    
    // Notify the user to hit the button to search for an image 
    const clickButton = <p className="text-left md:text-center w-auto font-light p-2 text-2xl border-4 border-black bg-gray-900/70 md:w-1/2 mx-auto font-code "> 
                            Please click on the search button to see what today's photo of the day is! 
                        </p>

    
    // event listener function 
    // when the user clicks on the button we want to get todays data
    function getData(e) {
        e.preventDefault();
        axios.get(url).then( (response) => setNasaData(response.data) ).catch( err => err.message )

    }

    const photoCardMobile = <div className='w-full mx-auto flex flex-col bg-gray-900/80 border-4 border-gray-900 rounded-md p-4 font-code'>

                                <img className='mx-auto w-full border-gray-700 border-4 rounded-lg' src={nasaData.url} alt=""/>

                                <p className="text-4xl text-center text-gray-300 my-4">{nasaData.title}</p>

                                    <div className="flex flex-col mb-4">

                                        <p className="text-2xl mb-4">{nasaData.date}</p>

                                        {nasaData.copyright === '' ?  <p>No Author</p> : <p className="text-lg">Taken By: {nasaData.copyright}</p> }

                                    </div>
                                    
                                <p className="text-lg md:text-xl md:tracking-widest ">{nasaData.explanation}</p>

                                <p className="text-center uppercase mt-4 text-lg md:text-xl">
                                    HD Photo <a className=" text-blue-600" href={nasaData.hdurl} target="_blank" rel="noreferrer"> here </a>
                                </p>

                            </div>
     
    return (
        <div className='text-white flex flex-col'>

           

            <div className="md:hidden my-10">
                {nasaData.length === 0 ? clickButton : photoCardMobile}
            </div>

            <div className="hidden md:block my-10">
                {   nasaData.length === 0 ? clickButton : <Photo data={nasaData} />}
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
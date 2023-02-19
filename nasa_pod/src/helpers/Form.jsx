import React from 'react';
import axios from 'axios';

export default function Form(props) {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var todaysDate = yyyy + '-' + mm + '-' + dd;

    let api = process.env.REACT_APP_API_KEY
    
    function getDate(e){
        e.preventDefault();
        props.setData({...props.data, date: e.target.value})
    }

    function getCamera(e){
        e.preventDefault();
        props.setData({...props.data, cameraState: e.target.value})
    }

    function fetchData(){
        axios.get(props.data.url).then(res => {
            props.setData({...props.data, roverImages: res.data.photos})
        }).catch( err => err.message)
    }

    function updateUrl(){
        return props.setData({...props.data, url: `https://api.nasa.gov/mars-photos/api/v1/rovers/${props.data.rover}/photos?earth_date=${props.data.date}&camera=${`fhaz`}&api_key=${api}`})
    }

    function handleSubmit(e){
        e.preventDefault();
        fetchData();
    }

    const cams = Object.values(props.data.camera).map(cam => <option key={props.data.id} value={cam}> {cam}</option>)


    return(
        <div className=' text-xl font-code '>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                
                <label className='flex flex-row gap-6'>
                    <p>Date</p>
                    <input className="w-full text-black text-center font-bold"   id='myDate' type="date" max={todaysDate} onChange={getDate}/>
                </label>
                
                <label htmlFor="cameras" className='flex flex-row justify-between'>
                   <p>Camera Option</p>
                   <select id="cameras" required className='text-black text-center font-bold'  onChange={getCamera} >
                         {cams}
                   </select>
                </label>


                <button onClick={updateUrl} className=" text-xl 
                bg-white  
                outline 
                outline-4 
                bg-blue-400/70 
                text-white
                font-light 
                outline-blue-600 
                w-1/2 
                hover:bg-blue-800/70
                md:w-full 
                mx-auto 
                p-2
                rounded" type="sumbit">Search</button>
                
            </form>
        </div>
    )
}
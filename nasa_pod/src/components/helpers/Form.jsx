import React from 'react';
import axios from 'axios';

export default function Form(props) {
    
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
        return props.setData({...props.data, url: `https://api.nasa.gov/mars-photos/api/v1/rovers/${props.data.rover}/photos?earth_date=${props.data.date}&camera=${props.data.cameraState}&api_key=${props.data.api}`})
    }
    function handleSubmit(e){
        e.preventDefault();
        fetchData();
    }

    const cams = Object.values(props.data.camera).map(cam => <option key={props.data.id} value={cam}> {cam}</option>)


    return(
        <div className='border-2 border-white mb-10 p-2 text-xl font-code'>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                
                <label className='flex flex-row gap-6'>
                    <p>Date</p>
                    <input className="w-full text-black text-center"  id='myDate' type="date" onChange={getDate}/>
                </label>
                
                <label htmlFor="cameras" className='flex flex-row justify-between'>
                   <p>Camera Option</p>
                   <select id="cameras" className='text-black text-center' onChange={getCamera} >
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
                md:w-1/4 
                mx-auto 
                p-2
                rounded" type="sumbit">Search</button>
                
            </form>
        </div>
    )
}
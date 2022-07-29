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
        <div className=''>
            <form className="flex flex-col text-lg" onSubmit={handleSubmit}>
                
                <label className='bg-gray-50/50'>
                    <p>Date</p>
                    <input className="w-full text-black "  id='myDate' type="date" onChange={getDate}/>
                </label>
                
                <label htmlFor="cameras" className='bg-gray-900/90'>
                   <p>Camera Option</p>
                   <select id="cameras" className=' text-black' onChange={getCamera} >
                         {cams}
                   </select>
                </label>


                <button onClick={updateUrl} className=" " type="sumbit">Search</button>
                
            </form>
        </div>
    )
}
import React, {useState} from 'react';

// camera names
const cameras = [{
    curiosity: {
        fhaz: 'Front Hazard Avoidance Camera',
        rhaz: 'Rear Hazard Avoidance Camera',
        mast: 'Mast Camera',
        chem: 'Chemistry and Camera Complex',
        mahli: 'Mars Hand Lens Imager',
        mardi: 'Mars Descent Imager',
        navcam: 'Navigation Camera',
    },
    opportunity: {
        fhaz: 'Front Hazard Avoidance Camera',
        rhaz: 'Rear Hazard Avoidance Camera',
        nav: 'Navigation Camera', 
        pan: 'Panoramic Camera',
        mini: 'Miniature Thermal Camera',
    },
    spirit: { 
        fhaz: 'Front Hazard Avoidance Camera',
        rhaz: 'Rear Hazard Avoidance Camera',
        nav: 'Navigation Camera',
        pan: 'Panoramic Camera',
        mini: 'Miniature Thermal Camera',
    },
}];

// function getDate(e){
//     e.preventDefault();
//     console.log(e.target.value)
//     setYourDate(e.target.value)
// }

// function getCamera(e){
//     e.preventDefault();
//     console.log(e.target.value)
//     setCameraState(e.target.value)
// }

// function handleSubmit(e){
//     e.preventDefault();
//     axios.get(url).then(res => setRoverImages(res.data.photos)).catch(err => console.log(err.message))
//     console.log(url)
// }

export default function Form(props) {

    return(
        <div>
            <form className="text-black"  >
                
                <label className=' flex flex-row justify-between  my-2'>
                    Date    
                    <input className="border-2 border-black w-auto text-center"  id='myDate' type="date" />
                </label>
                
                <label htmlFor="cameras" className='my-2 w-full flex flex-row justify-between'>
                   <p>Camera Option</p>
                   <select id="cameras" className='w-1/3 text-xl' >
                          {cameras.map(camera => (<option key={camera.id}>{camera.camera_name}</option>))}
                   </select>
                </label>


                <button className="ml-auto bg-white border-2 border-black px-2 mt-4 rounded-md" type="sumbit">Search</button>
                
            </form>
        </div>
    )
}
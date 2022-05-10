import React, {useState} from 'react';

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
        <div className=''>
            <form className="flex flex-col text-lg">
                
                <label className='bg-gray-50/50'>
                    <p>Date</p>
                    <input className="w-full text-black "  id='myDate' type="date" />
                </label>
                
                <label htmlFor="cameras" className='bg-gray-900/90'>
                   <p>Camera Option</p>
                   <select id="cameras" className=' text-black' >
                          <option value="all">Please Choose A Camera View</option>
                   </select>
                </label>


                <button className=" " type="sumbit">Search</button>
                
            </form>
        </div>
    )
}
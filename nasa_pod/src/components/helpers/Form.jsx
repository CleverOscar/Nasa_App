import React from 'react';

export default function Form(props) {
    
    function getDate(e){
        e.preventDefault();
        props.setData({...props.data, date: e.target.value})
        console.log(e.target.value)
        console.log(props)
    }

    function getCamera(e){
        e.preventDefault();
        props.setData({...props.data, cameraState: e.target.value})
        console.log(e.target.value)
        console.log(props)
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(props)
    }

    const cams = Object.values(props.data.camera).map(cam => <option value={cam}> {cam}</option>)



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


                <button className=" " type="sumbit">Search</button>
                
            </form>
        </div>
    )
}
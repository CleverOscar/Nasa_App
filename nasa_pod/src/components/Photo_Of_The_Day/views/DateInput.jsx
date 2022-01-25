import React from 'react';


export default function DateInput(props) {

    function getDate(){
        return props.setDateSetup(document.getElementById("myDate").value)
      }
    return(
    <div className='border-4 border-black px-4 py-2 rounded-lg flex flex-col w-10/12 mx-auto shadow-xl lg:w-4/12'>
      <label  className='text-xl py-2 text-center'> Pick a date to checkout a certain date: </label>
      <input className='border-2 border-black rounded px-4 w-10/12 mx-auto text-xl' id="myDate" type="date" max={new Date().toISOString().split('T')[0]} onChange={getDate} p/>
      <button className="mx-auto border-2 border-black rounded-lg px-4 my-6 text-xl" type="sumbit">Search</button>
  </div>
    )
}
import React from 'react';


export default function Video(){
    return(
        <div className='w-full mx-auto flex flex-col font-code'>
            

            <p className="text-2xl text-center my-4 ">{nasaData.title}</p>
            
                <iframe title={nasaData.title} className="h-96" src={nasaData.url} />
                    

                <div className="text-xl p-2 flex flex-row justify-around ">
                    <p>{nasaData.date}</p>
                    {nasaData.copyright === '' ? <p>Taken By: {nasaData.copyright}</p> :  <p>No Author</p> }
                </div>
                
            <p className="text-lg md:text-xl md:tracking-widest p-3 bg-gray-500/25">{nasaData.explanation}</p>

            <p className="text-center mt-3 text-lg md:text-xl">HD Photo  
                <a className="uppercase text-blue-600" href={nasaData.hdurl} target="_blank" rel="noreferrer"> here</a>
            </p> 
        </div>
    )
}
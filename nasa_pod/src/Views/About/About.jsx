import React from 'react';

                    
            

export default function About() {
    return(
        <div className="text-white mx-4 mb-auto border-white border-2 rounded-lg shadow shadow-white p-4 font-code bg-gray-900/60 flex flex-col mx-auto md:w-3/4 lg:w-1/2 md:mx-auto">
            <p className="text-center text-2xl md:text-4xl">
                About Page
            </p>

            <p className="text-lg md:text-2xl md:leading-10 md:tracking-tight">
                This application was created from the ground up and maintained by, <a href="https://cleveroscar.dev/" className='text-blue-400' target="_blank" rel="noreferrer"> Oscar Ortiz</a>. 

                If you are a developer and want access to the API, check out Nasa 's API  documentation <a href="https://api.nasa.gov/" target="_blank" className='text-blue-400' rel="noreferrer"> page </a>.  
            </p> 

        </div>
    )
}
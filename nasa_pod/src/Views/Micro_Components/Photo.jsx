import React from 'react';

export default function Photo({data}) {

    return(
        <div className='my-10 bg-blue-900/30 border-2 border-black p-2 font-code lg:flex lg:flex-row lg:justify-between '>

                <img className='border-2 border-black lg:w-1/2 lg:mx-2' src={data.url} alt=""/>

                <div className="my-2 bg-gray-900/90 p-2 border-2 border-black lg:w-1/2 lg:mx-2 lg:my-0 " >

                    <p className="text-center text-2xl">{data.title}</p>

                    <div className="font-bold text-center">
                        <p>{data.date}</p>
                        
                        {data.copyright === null ?  <p> Unknown Owner </p> : <p>Taken By: {data.copyright} </p> }
        
                    </div>

                    <p className="text-lg font lg:text-2xl">{data.explanation}</p>

                    <p className="mt-2 text-lg text-center">HD Photo  
                        <a className="text-blue-800" href={data.hdurl} target="_blank" rel="noreferrer"> here</a>
                    </p>  
                </div>   
        </div>
    )
}   

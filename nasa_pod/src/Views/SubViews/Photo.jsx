import React from 'react';

export default function Photo({data}) {

    return(
        <div className='bg-gray-900/80 w-full border-4 border-gray-900 rounded-md p-4 mt-10'>
                <img className='float-left w-1/2 border-gray-700 border-4 rounded-lg mr-4' src={data.url} alt=""/>
                <div className=" font-code w-full" >
                            <p className="text-3xl text-center uppercase ">{data.title}</p>

                            <div className="text-2xl py-4">
                                        
                                        <p>{data.date}</p>
                                        
                                        {data.copyright === null ?  <p> Unknown Owner </p> : <p>Taken By: {data.copyright} </p> }
                
                            </div>

                            <p className="text-lg md:tracking-widest ">{data.explanation}</p>

                            <p className=" text-center uppercase mt-4 text-lg">HD Photo  
                                <a className="text-blue-600" href={data.hdurl} target="_blank" rel="noreferrer"> here</a>
                            </p>  
                        </div>   
        </div>
    )
}   
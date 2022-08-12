import React from 'react';

export default function Photo({data}) {

    return(
        <div className='bg-gray-900/80 md:flex-none w-full border-4 border-gray-900 rounded-md p-4 my-10'>
                <img className=' md:float-left  md:w-2/3 border-gray-700 border-4 rounded-lg mx-auto md:mr-4' src={data.url} alt=""/>
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

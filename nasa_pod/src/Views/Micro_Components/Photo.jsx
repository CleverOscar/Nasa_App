import React from 'react';

export default function Photo ({data}){
    return(
        <div className='max-w-3xl max-h-full mx-auto flex flex-col dark-palette rounded-md p-4 font-code my-10'>

            <img className='mx-auto w-full dark-palette' src={data.url} alt=""/>

            <p className="text-4xl text-center text-gray-300 my-4">{data.title}</p>

                <div className="flex flex-col mb-4">

                    <p className="text-2xl mb-4">{data.date}</p>

                    {data.copyright === '' ?  <p>No Author</p> : <p className="text-lg">Taken By: {data.copyright}</p> }

                </div>
                
            <p className="text-lg md:text-xl md:tracking-widest ">{data.explanation}</p>

            <p className="text-center uppercase mt-4 text-lg md:text-xl">
                HD Photo <a className=" text-blue-600" href={data.hdurl} target="_blank" rel="noreferrer"> here </a>
            </p>

        </div>
    )
}
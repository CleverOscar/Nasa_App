import React from 'react';

export default function NasaPhoto(props){
    return(
        <div className="">
            <h1 className="text-4xl text-center my-10">
                Astronomy Photo Of The Day
            </h1>

            <img className="mx-auto rounded-xl border-8 border-slate-500 drop-shadow-2xl" src={props.data.url} alt={props.data.media_type} />

            <h2 className='text-center text-2xl mt-4'>Name Of Image: {props.data.title}</h2>
            <p className='text-center'>Taken By: {props.data.copyright}</p>
            <p className='bg-black text-white p-4 text-xl w-8/12 mx-auto my-10 rounded-xl'>{props.data.explanation}</p>
        </div>
    )
}

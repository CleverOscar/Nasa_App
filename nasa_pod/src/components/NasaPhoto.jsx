import React from 'react';

export default function NasaPhoto(props){
    return(
        <div className="">
            <h1 className="text-4xl text-center my-10">
                {props.data.title}
            </h1>

            <img className="mx-auto rounded-xl border-8 border-slate-500 drop-shadow-2xl" src={props.data.url} alt={props.data.media_type} />

            <p className='w-1/2 mx-auto my-10'>{props.data.explanation}</p>
        </div>
    )
}
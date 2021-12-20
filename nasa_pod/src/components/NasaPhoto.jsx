import React from 'react';

export default function NasaPhoto(props){
    return(
        <div className="">
            <h1 className="text-4xl text-center my-10">
                {props.data.title}
            </h1>

            <img className="mx-auto" src={props.data.url} alt={props.data.media_type} />

            <p className='w-1/2 mx-auto my-10'>{props.data.explanation}</p>
        </div>
    )
}
import React from 'react';

function Card({data}){


    const photo = <div className='border-2 w-11/12 mx-auto flex flex-col'>
                        <img src={data.url} alt=""/>
                        <p> Title: {data.title}</p>
                        <p>{data.date}</p>
                        <p>Taken By: {data.copyright}</p>

                        <p></p>
                    </div>

    
    return (
        <div className='text-white text-4xl'>
            {Object.keys(data).length > 0 ? <>{photo}</> : <>Loading...</>}
        </div>
    )
}

export default Card;
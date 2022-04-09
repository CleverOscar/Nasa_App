import React from 'react';

function Card({data}){


    const photo = <div className='border-2 w-11/12 mx-auto flex flex-col'>
                        <p className="text-2xl text-center my-4 font-[roboto]">{data.title}</p>
                        <img src={data.url} alt=""/>
                        
                            <div className="text-xl p-2 flex flex-row justify-around font-[chakara]">
                                <p>{data.date}</p>
                                <p>Taken By: {data.copyright}</p>
                            </div>
                        <p></p>
                    </div>

     
    return (
        <div className='text-white'>
            {Object.keys(data).length > 0 ? <>{photo}</> : <>Loading...</>}
        </div>
    )
}

export default Card;
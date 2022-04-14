import React from 'react';

function Card({data}){


    const photo = <div className='w-full mx-auto flex flex-col'>
                        <p className="text-2xl text-center my-4 font-[roboto]">{data.title}</p>
                        <img src={data.url} alt=""/>
                        
                            <div className="text-xl p-2 flex flex-row justify-around font-[chakara]">
                                <p>{data.date}</p>
                                {data.copyright === '' ? <p>Taken By: {data.copyright}</p> :  <p>No Author</p> }
                            </div>
                            
                        <p className="text-lg md:text-xl md:tracking-widest p-3 bg-gray-500/25">{data.explanation}</p>

                        <p className="text-center mt-3 text-lg md:text-xl">HD Photo  
                            <a className="uppercase text-blue-600" href={data.hdurl} target="_blank" rel="noreferrer"> here</a>
                        </p>
                        
                    </div>

     
    return (
        <div className='text-white'>
            {Object.keys(data).length > 0 ? <>{photo}</> : <p className="text-center text-base">Click the fetch button to see a photo!</p>}
        </div>
    )
}

export default Card;
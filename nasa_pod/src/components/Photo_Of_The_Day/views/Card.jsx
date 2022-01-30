import React from 'react';

export default function Card({data}){
    const imageMedia = <div className=' mx-6 lg:grid lg:grid-cols-2 gap-10 lg:items-center'>
                            <div>
                                <p className='hidden lg:block text-2xl py-8 text-center italic text-cyan-500 '> 
                                    Name : {data.title}
                                </p>

                                <img className="shadow-2xl mx-auto  border-4 border-black rounded-xl lg:w-full" src={data.url} alt={data.media_type} />

                                <p className='text-xl text-center italic text-cyan-500 md:text-center md:text-2xl py-5 lg:hidden'> 
                                     Name : {data.title}
                                </p>
                                <p className="text-center  lg:text-xl pb-6">Check out the full HD photo <a className="uppercase italic text-blue-900 underline" href={data.hdurl} target="_blank" rel="noreferrer">here</a></p>
                            </div>

                            <div>
                                <p className='text-center mb-4 text-gray-500 text-xl lg:text-2xl'>Taken By: <span className='underline text-blue-900 italic'>{data.copyright}</span></p>
                                <p className='font-semibold tracking-wide text-base md:leading-7 md:text-lg border-double border-8 border-black p-4 rounded-lg shadow-2xl'>{data.explanation}</p>
                            </div>
                        </div>

const videoMedia =  <div className='mx-6 lg:grid lg:grid-cols-2 gap-10 lg:items-center'>
<div>
<p className='hidden lg:block text-2xl py-8 text-center italic text-cyan-500 '> 
Name : {data.title}
</p>


<iframe className='border-2 border-black h-96 w-full' title={data.title}  src={data.url}> </iframe>

<p className='text-xl text-center italic text-cyan-500 md:text-center md:text-2xl py-5 lg:hidden'> 
Name : {data.title}
</p>
<p className="text-center  lg:text-xl pb-6">Check out the full HD photo <a className="uppercase italic text-blue-900 underline" href={data.hdurl} target="_blank" rel="noreferrer">here</a></p>
</div>

<div>
<p className='text-center mb-4 text-gray-500 text-xl lg:text-2xl'>Taken By: <span className='underline text-blue-900 italic'>{data.copyright}</span></p>
<p className='font-semibold tracking-wide text-base md:leading-7 md:text-lg border-double border-8 border-black p-4 rounded-lg shadow-2xl'>{data.explanation}</p>
</div>
</div>


    return(<div className="">
        <p className="text-center text-2xl my-6 underline md:shadow-none">
          Astronomy Photo Of The Day
        </p>
        {data.media_type === "image" ? imageMedia : data.media_type === "video" ? videoMedia : <p className='text-center md:text-2xl pb-4'>Sorry, You need to search a date first in order to see something.</p>}
    </div>
    )
}
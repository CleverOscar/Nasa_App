import React from 'react';

export default function Card({data}){
    
    const imageMedia = <div className='rounded-xl bg-white border-6 border-black md:px-6 mx-6 lg:grid lg:grid-cols-2 gap-10 lg:items-center'>
                            <div>
                                <p className='hidden lg:block text-2xl py-8 text-center italic text-cyan-500 '> 
                                    {data.title}
                                </p>

                                <img className="rounded-tr-xl rounded-tl-xl mx-auto border-black lg:w-full" src={data.url} alt={data.media_type} />

                                <p className='uppercase text-xl font-semibold py-4 text-center italic text-cyan-500 md:text-center md:text-2xl lg:hidden'> 
                                    {data.title}
                                </p>
                            </div>

                            <div>
                                {data.copyright === "" ?  <div className="text-center pb-4">Unknown Artist</div> : <p className='text-center mb-4 text-gray-500 text-xl lg:text-2xl'>Taken By: <span className='underline text-blue-900 italic'>{data.copyright}</span></p>}
                                <p className="border-t-4 border-black pt-4 text-center underline text-2xl italic font-semibold">Description</p>
                                <p className=' font-semibold tracking-wide text-base md:leading-7 md:text-lg p-4 shadow-2xl'> {data.explanation}</p>
                            </div>

                            <div className="boder-2 border-red rounded-b-xl  flex flex-row justify-center bg-gray-500">
                                <div className='mx-auto py-4 w-3/12 text-center uppercase'>
                                    Type: {data.media_type}
                                </div> 
                                <div className='mx-auto py-4 w-3/12 text-center'>
                                    HD Photo: <span><a href={data.url} target="_blank"  alt={data.title} rel="noreferrer">LINK</a></span>
                                </div>
                                <div className='mx-auto py-4 w-3/12 text-center'>
                                    Service 
                                </div>
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
        <p className="text-center text-2xl text-white my-6 underline md:shadow-none">
          Astronomy Photo Of The Day
        </p>
        {data.media_type === "image" ? imageMedia : data.media_type === "video" ? videoMedia : <p className='text-center md:text-2xl pb-4'>Sorry, You need to search a date first in order to see something.</p>}
    </div>
    )
}
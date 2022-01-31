import React from 'react';

export default function Footer() {
    return(
        <div className="bg-gray-300/20 text-white  border-4 border-black rounded-lg mt-10">
           <p className="text-center text-base underline border-b-4 border-black py-3 md:text-xl">Contact Information</p>
            
                <ul className='flex flex-row items-center justify-center my-3'>
                    <li className='w-3/12'>
                        <a href="https://twitter.com/CleverOscarDev" target="_blank" rel="noopener noreferrer">
                            <img className=' w-1/2 mx-auto lg:w-3/12' src='https://cdn3.iconfinder.com/data/icons/capsocial-round/500/twitter-512.png' />
                        </a>
                    </li>
                    <li className='w-3/12'>
                        <a href="https://www.linkedin.com/in/clever-oscar/" target="_blank" rel="noopener noreferrer">
                            <img className='w-1/2 mx-auto lg:w-3/12' src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png" />
                        </a>
                        
                    </li>
                    <li className='w-3/12'> 
                        <a href="https://github.com/CleverOscar" target="_blank" rel="noopener noreferrer">
                            <img className='w-1/2 mx-auto lg:w-3/12' src='https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-512.png' />
                        </a>
                    </li>
                </ul>                
            
            <p className='text-center my-3'>Found a bug? Report it <span className='text-blue-600'> <a href='https://github.com/CleverOscar/Nasa_App/issues/new' target="_blank">here</a></span></p>
        </div>
    )
}
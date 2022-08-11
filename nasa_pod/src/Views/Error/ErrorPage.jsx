import React from 'react';


export default function ErrorPage() {
    return(
        <div className='flex flex-col items-center my-4'>
            <div className='text-xl w-10/12 text-center md:text-3xl'>Sorry the page you are looking for is not available</div>
            <img className='w-full md:w-1/2' src="https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt='error page' />
        </div>
    )
}

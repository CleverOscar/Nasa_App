import React from 'react';
import Form from '../../helpers/Form';
import {Carousel} from 'react-responsive-carousel';

export default function Opportunity() {
    return(
        <div>
             <p className='text-2xl text-center mt-10'> Opportunity Rover </p>

            {/* form and photos view here */}

            <div className='flex flexr-row  justify-around bg-gray-800/40'>
                <div>
                    <Form />
                </div>

                <div>
                    <Carousel />
                </div>
            </div>
        </div>
    )
}
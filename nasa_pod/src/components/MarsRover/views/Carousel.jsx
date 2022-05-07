import React from 'react';
import {Carousel} from 'react-responsive-carousel';

export default function RoverCarousel(props){   

    const images = props.data.map(image => <img  src={image.img_src} />);

    return(
        <div>
            <Carousel>
                {props.data.map(image => <div key={image.id}> <img className='my-2' src={image.img_src} /> </div>)}
            </Carousel>
        </div>
    )
}
  
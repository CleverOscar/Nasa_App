import React from 'react';
import {Carousel} from 'react-responsive-carousel';

export default function RoverCarousel(props){   


    return(
        <div className=' '>
            <Carousel >
                {props.data.roverImages.length > 0 ? props.data.roverImages.map(image => <img src={image.img_src} />) : <p>No images found</p>}
            </Carousel>
        </div>
    )
}

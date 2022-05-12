import React from 'react';
import {Carousel} from 'react-responsive-carousel';

export default function RoverCarousel(props){   

    // const images = props.data.map(image => <img  src={image.img_src} />);

    console.log(props.data)
    return(
        <div className=' '>
            <Carousel >
                {props.data.roverImages.length > 0 ? props.data.roverImages.map(image => <img src={image.img_src} />) : <p>No images found</p>}
            </Carousel>
        </div>
    )
}

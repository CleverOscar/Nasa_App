import React from 'react';

export default function Images(props) {

    const images = <div className="h-auto  my-10 p-4" key={props.data.id}>
        <img className="w-full h-auto  border-8 border-black border-double rounded-lg shadow-2xl mx-auto" src={props.data.img_src} alt={props.data.camera.name} />
        <p className='text-lg'>Days on mars: {props.data.sol}</p>
        <p>Earth date: {props.data.earth_date}</p>
    </div>
    return (<>
        {images}
    </>)
}
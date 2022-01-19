import React from 'react';

export default function Images(props) {

    const images = props.data.map(item => 
        <div className="border-4 mt-10" key={item.id}>
            <p>Rover: {item.rover.name}</p>
            <p>Camera Name: {item.camera.full_name}</p>
            <p>Solar Day: {item.sol}</p>
            <p>Earth Day: {item.earth_date}</p>
            <img alt={item.name} src={item.img_src} />
        </div>
    )
    
    return (<>
        {images}
    </>)
}
import React from 'react';

export default function Images(props) {

    const images = <div className=" border-2 border-black my-10" key={props.data.id}>
        <img className="w-full mx-auto" src={props.data.img_src} alt={props.data.camera.name} />

        
    </div>
    
    return (<>
        {images}
    </>)
}






    // const images = props.data.map(item => 
    //     <div className="border-4 border-black p-6 mt-10 shadow-2xl rounded-lg lg:w-auto lg:mx-auto lg:flex lg:flex-row  lg:items-center" key={item.id}>
    //         <img className="mx-auto w-10/12 border-black border-4 rounded-lg lg:w-1/2" alt={item.name} src={item.img_src} />
    //         <div className="text-2xl w-10/12 mx-auto border-4 border-black bg-gray-200 rounded-lg px-6 py-2 mt-4 uppercase mx-auto lg:mx-8 lg:px-6 lg:w-8/12 lg:text-3xl lg:text-left lg:mt-none">
    //             <p className="underline my-2">Rover: {item.rover.name}</p>
    //             <p className="text-red-500">Camera View: {item.camera.full_name}</p>
    //             <p className="text-green-500">Solar Day: {item.sol}</p>
    //             <p className="text-blue-500">Earth Day: {item.earth_date}</p>
    //             <p className="text-green-800">Status: {item.rover.status}</p>
    //         </div>
    //     </div>
    // )
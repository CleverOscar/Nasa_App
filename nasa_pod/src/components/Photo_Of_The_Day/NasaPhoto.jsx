import React, {useState} from 'react';
import axios from 'axios';
import OptionsTab from './views/OptionsTab';



export default function NasaPhoto(){



    return(<div className="mt-6 w-11/12 mx-auto flex flex-col" >
            {/* {dateForm} */}

            {/* button to fetch data */}

            {/* display fetched data */}
            {/* <Card data={nasaData}/>  */}


           <OptionsTab />


          </div>
    )
}

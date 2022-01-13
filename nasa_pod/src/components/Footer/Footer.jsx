import React from 'react';

export default function Footer() {
    return(
        <div className="border-4 mt-10">
           <p className="text-center text-2xl mt-6">Contact Information</p>
            
                <ul className="grid grid-cols-3 text-center my-8">
                    <li>
                        <a href="https://twitter.com/CleverOscarDev" target="_blank" rel="noopener noreferrer">
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/clever-oscar/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </li>
                    <li> 
                        <a href="https://github.com/CleverOscar" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                    </li>
                </ul>                
            
        </div>
    )
}
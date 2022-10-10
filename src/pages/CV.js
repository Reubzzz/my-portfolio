// import Pdf from '../componets/Files/CV.pdf';
import "./CV.css";
import CurrentCV from '../componets/Files/CV.pdf';
import Navbar from '../componets/navbar'
import Resume from '../componets/resumereader.js'


import React from 'react';



export default function CV(){




 
    return(
 <>
    <Navbar/>


     <div className='main-container'>
         <div className='Title'>
             <h1>My Resume</h1>
         </div>
             <div className='PDFcontainer'>
                <Resume/>

             </div>
             
             <div className='Download'>
                <button id='downloadcv'>
                    <a href={CurrentCV} download="ReubenCV"> Download CV </a>
                </button>
             </div>

     </div>
</>
    )
}


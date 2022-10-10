// import Pdf from '../componets/Files/CV.pdf';
import "./CV.css";
import CurrentCV from '../componets/Files/CV.pdf';
import Navbar from '../componets/navbar'
import Resume from '../componets/resumereader.js'

import { Link } from "react-router-dom";
import React from 'react';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';


export default function CV(){

    // const onDownload = () => '../componets/Files/CV.pdf' 


 
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


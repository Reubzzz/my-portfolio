// import Pdf from '../componets/Files/CV.pdf';
import "./CV.css";

import Navbar from '../componets/navbar'
import Resume from '../componets/resumereader.js'


import React from 'react';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';


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
                 {/* <Document file={Pdf} >
                    {[1,2,3].map(page => (
                         <Page pageNumber={page} width={100} height={100}/>
                         ))}
                 </Document> */}
             </div>

     </div>
</>
    )
}


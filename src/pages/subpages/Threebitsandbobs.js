import React from "react";
import "./Threebitsandbobs.css"

import Navbar from '../../componets/navbar'


import Blob from '../../componets/Files/Three/Blob'
import Paper from '../../componets/Files/Three/Paper'


function threebits(){


    return(

        <>   
        <Navbar/>   
            <div className="Bitscontainer">
                <h1>Bits and Bobs</h1>
            <p>Little creation in ThreeJS mouse over them for effects</p>

                    <div className="BlobsFiles">
                        <div className="Blobcontainer">
                        <Blob/>
                        </div>     
                    </div>
   
          
            </div>
        </>  
    )
}

export default threebits;
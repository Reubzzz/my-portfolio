import React from "react";
import "./threeFile.css"

import Navbar from '../../componets/navbar'

import Portal from '../../componets/Files/Three/Portal'

import RainCloud from '../../componets/Files/Three/Raincloud'

import Nebular from '../../componets/Files/Three/Nebular'

import CrazyGlobe from '../../componets/Files/Three/Sun'

import Blob from '../../componets/Files/Three/Blob'

import SlideShow from '../../componets/Files/Three/Slideshow'
function threeFile(){


    return(

        <>   <Navbar/>   
            <div className="worldcontainer">
            

                    <div className="ThreeFiles">
                        <h1>ThreeJS Projects</h1>

                        

                                <div className="Portal">
                                    <Portal/>

                                    <h1>Portal Project</h1>
                                    
                                </div>

                                <div className="Raincloud">

                                    <RainCloud/>

                                    <h1>RainCloud Project</h1>

                            
                                </div>

                                <div className="Nebular">

                                    <Nebular/>
                                    <h1>Nebular Project</h1>
                                </div>
                                    
                                <div className="CrazyGlobe">

                                    <CrazyGlobe/>
                                    <h1>Interactive Globe Project</h1>
                                </div>


                    </div>
          
            </div>
        </>  
    )
}

export default threeFile;
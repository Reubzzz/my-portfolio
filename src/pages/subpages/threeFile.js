import React from "react";
import "./threeFile.css"

import Navbar from '../../componets/navbar'

import Portal from '../../componets/Files/Three/Portal'

import RainCloud from '../../componets/Files/Three/Raincloud'

import Nebular from '../../componets/Files/Three/Nebular'

import CrazyGlobe from '../../componets/Files/Three/Sun'


function threeFile(){


    return(

        <>
           <Navbar/>   
            <div className="worldcontainer">
            
                        <div className="portalcontainer">
                                <div className="Portal">
                                    <Portal/>                        
                                </div>

                                        <div className="Titleoverlay">
                                            <h1>ThreeJS Projects</h1>
                                        </div>

                                        <div className="LabelPortal">
                                            <h1>Portal</h1>
                                        </div>

                        </div> 






                        <div className="Raincontainer">

                                <div className="Rain">
                                <RainCloud/>                        
                                </div>

                                        <div className="LabelRain">
                                            <h1>Rain</h1>
                                        </div>

                        </div>   





                        
                        <div className="Nebularcontainer">

                                <div className="Nebular">
                                <Nebular/>                        
                                </div>

                                        <div className="LabelNebular">
                                            <h1>Nebular</h1>
                                        </div>

                        </div>   


                        <div className="CrazyGlobecontainer">

                                <div className="CrazyGlobe">
                                <CrazyGlobe/>                        
                                </div>

                                        <div className="LabelCrazyGlobe">
                                            <h1>CrazyGlobe</h1>
                                        </div>

                        </div>   






{/* 
                        
                                    
                                <div className="CrazyGlobe">

                                    <CrazyGlobe/>
                                    <h1>Interactive Globe Project</h1>
                                </div>  */}


                    
          
            </div>
        </>  
    )
}

export default threeFile;
import "./ProjectThrill.css";
import React from 'react';
import Navbar from '../../componets/navbar'



export default function ProjectThrill(){
    return(


        <>

            <Navbar/>

        <div className="projectcontainer">  

                <div className="thrillCapital">

                                                    <div className="ThrillTitle">
                                                                <h1>Thrill Capital</h1>
                                                            </div>

                                                                    <div className="ThrillImgcontainer">

                                                                            <div className="Thrillone">
                                                                                <img src={require('../../componets/Files/ThrillCapital/PointCloud1.jpg')} />
                                                                            </div>

                                                                            <div className="Thrilltwo">
                                                                                <img src={require('../../componets/Files/ThrillCapital/pointmesh.png')} />
                                                                            </div>


                                                                    </div>


                                                                                <div className="Thrillblurbcontainer">

                                                                                        <div className="thrillblurb">
                                                                                            <p> While doing my Intership for Thrill Capital I was approached to create an driver distraction program, where I would have to take Pointcloud data and turn
                                                                                                into a solid mesh for the Unity engine to allow a virtual car to drive around on. 
                                                                                            </p>
                                                                                        </div>



                                                                                        <div className="thrillblurb2">
                                                                                            <h1> This is the completed project for our 10 week internship program.
                                                                                            </h1>
                                                                                        </div>
                                                                        


                                                                                </div>






                                                    <div className="thrillCapitalvideocontainer">

                                                            <div className="ThrillFinal">
                                                                <img src={require('../../componets/Files/ThrillCapital/final.PNG')} />
                                                            </div>
                                                                    <div className="ThrillLink">
                                                                            <a href="https://www.dropbox.com/sc/lj6btjm0x46prdh/AAD0GTFg9U3iSyUU63MEAkFZa">
                                                                            <p>DropBox Final Videos</p>
                                                                            </a>
                                                                    </div>

                                                        </div>

                                     

                                   


                                            <div className="Programs">
                                                    <h1>My Program</h1>
                                                    <h2>This is my Translator for Pointcloud to Mesh</h2>

                                                <div className='Git'>
                                                    <p>https://github.com/Reubzzz/Translator.git</p>
                                                </div>
                                            
                                        
                                            </div>
                            
                                 </div> 
                        
        </div>
                                 
    </> 
    
    ) 
}
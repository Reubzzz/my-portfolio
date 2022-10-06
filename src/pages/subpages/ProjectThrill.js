import "./ProjectThrill.css";
import React from 'react';
import Navbar from '../../componets/navbar'

import droneview from "../../componets/Files/ThrillCapital/DroneviewShort.mp4";
import driveview from "../../componets/Files/ThrillCapital/DrivableShort.mp4";




export default function ProjectThrill(){
    return(
        <div className="projectcontainer">
            <Navbar/>

            <div className="subbarcontainer">
                        <div className="ThrillTitle">
                            <h1>Thrill Capital</h1>
                        </div>
            </div>  

                <div className="thrillCapital">

                            <div className="Thrillone">
                                <img src={require('../../componets/Files/ThrillCapital/PointCloud1.jpg')} />
                            </div>

                            <div className="Thrilltwo">
                                <img src={require('../../componets/Files/ThrillCapital/pointmesh.png')} />
                            </div>

                                    <div className="thrillblurb">
                                        <p> While doing my Intership for Thrill Capital I was approched to create an driver distraction program, where i would have to take Pointcloud data and turn
                                            into a solid mesh for the Unity engine to allow a virtual car to drive around on 
                                        </p>
                                    </div>



                                    <div className="thrillblurb2">
                                        <h1> This is the completed project for our 10 week internship program
                                        </h1>
                                    </div>
                            

                       <div className="thrillCapitalvideos">
                       <div className="thrillvid1">
                                <video src={droneview} width="600" height="300" controls="controls" />
                            </div>
                            
                            <div className="thrillvid2">
                                <video src={driveview} width="600" height="300" controls="controls"  />
                            </div>

                        </div>

                        <div className="Programs">
                                <h1>My Program</h1>
                                <h2>This is my Translator for pointcloud to Mesh</h2>
                            <div className='Git'>
                                
                                <p>https://github.com/Reubzzz/Translator.git</p>
                            </div>
                        
                    
                        </div>
          
          
                </div>          
        </div>
                                 
    
    
    ) 
}
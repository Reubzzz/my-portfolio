import "./Blender.css";
import React from 'react';
import botty from '../../componets/Files/Blender/Bot.mp4'
import Navbar from '../../componets/navbar'


export default function Blender() {

return (
<>
   <Navbar/> 
        <div className="blendercontainer">

            <div className="Heading">

                <h1>Blender Projects </h1>

            </div>
            
                <div className="Animationscontainer">
                     <p>This is a basic mini bot created in blender with an animation of walking across the screen </p>
                        <div className = "Bot">
                            <video id="botvid" src={botty}  autoPlay loop muted />
                        </div>
                   
                </div>
        </div>
</>
)
}
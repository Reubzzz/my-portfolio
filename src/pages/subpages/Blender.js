import "./Blender.css";
import React from 'react';
import botty from '../../componets/Files/Blender/Bot.mp4'
import Navbar from '../../componets/navbar'


export default function Blender() {

return (
<div className="blendercontainer">
<Navbar/>
    <div className="Heading">

        <h1>Blender Projects </h1>

    </div>
    
        <div className="Animations">
            <div className = "Bot">
                <video src={botty} width="600" height="300" autoPlay loop muted />
            </div>
            <p>This is a basic mini bot created in blender with an animation of walking across the screen </p>
        </div>
</div>

)
}
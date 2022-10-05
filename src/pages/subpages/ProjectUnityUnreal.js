import "./ProjectUnityUnreal.css";
import React from 'react';
import chessmove from '../../componets/Files/Unity/Chess/Movement.mp4'
import Navbar from '../../componets/navbar'

export default function UnityUnreal() {

return (
<div className="Enginescontainer">
<Navbar/>

    <div className="Heading">

        <h1>Unity Projects </h1>

    </div>
    
        <div className="Unity Container">
            <div className = "Chessgame">
                <video src={chessmove} width="600" height="300" controls="controls" />
            </div>
            <p>This is a basic chessboard set up with the actual moves of each piece added in. This was written in C# and the unity engine. </p>
        </div>









</div>

)
}
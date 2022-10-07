import "./ProjectUnityUnreal.css";
import React from 'react';
import chessmove from '../../componets/Files/Unity/Chess/Movement.mp4'
import Navbar from '../../componets/navbar'

export default function UnityUnreal() {

return (
    <>
 <Navbar/>   
        <div className="Enginescontainer">

            <h1>Unity Projects </h1>
            
                <div className="UnityContainer">
                    <div className = "Chessgame">
                        <video src={chessmove} controls="controls" />
                    </div>
                    <p>This is a basic chessboard set up with the actual moves of each piece added in. This was written in C# and the unity engine. </p>
                </div>









        </div>
</>
)
}
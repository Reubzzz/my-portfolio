import "./ProjectUnityUnreal.css";
import React from 'react';
import chessmove from '../../componets/Files/Unity/Chess/Movement.mp4'
import Navbar from '../../componets/navbar'

export default function UnityUnreal() {

return (
    <>
 <Navbar/> 

        <div className="Enginescontainer">


                <div className="UnityContainer">

                            <div className="UnityTitle">
                            <h1>Unity Projects </h1> 
                            </div>
                        
                        <div className="Chesscontainer">
                            
                                <div className = "Chessgame">
                                        <video id="Chessvideo" src={chessmove} controls="controls" />
                                    </div>

                                    <div className="ChessDiscription">

                                                <p>This is a basic chessboard set up with the actual moves of each piece added in.
                                                    This was written in C# and the unity engine. </p>
                                    </div>
                        </div>

                
        

                            
                
                </div>

        </div>
</>
)
}
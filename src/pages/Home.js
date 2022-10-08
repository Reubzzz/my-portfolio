import React from 'react';
import OpenHero from '../componets/Hero2'

import Button from '../componets/Mainbutton'

import './Home.css'



function Home(){


        



    return(
        <>
        
         <div className="Homescreencontainer">
                <div className="Hero">
                    
                    <OpenHero/>     
                </div>      
                            <div className ="overlayhome">
                                <h1>WELCOME TO MY PAGE </h1>  
                            </div>

                            <div className ="ButtonContainer">
                                <div className = "BUTTON">
                                <Button/>
                                </div>
                            </div>


                

                        
                
         </div>
       </>
    )
}

export default Home;
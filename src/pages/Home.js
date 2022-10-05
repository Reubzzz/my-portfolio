import React from 'react';
import Hero2 from '../componets/Hero2'

import Button from '../componets/Mainbutton'

import './Home.css'



function Home(){


        



    return(
        <>
        
         <div className="Homescreencontainer">
                <div className="Hero">
                    <Hero2/>     
                        

                            <div className ="overlayhome">

                                <h1>WELCOME TO MY PAGE </h1>  

                                
  
                            </div>

                <div className = "BUTTON">
                    <Button/>

                </div>

                        
                </div>
         </div>
       </>
    )
}

export default Home;
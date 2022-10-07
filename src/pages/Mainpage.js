
import Hero from '../componets/Hero'
import Navbar from '../componets/navbar'
import './Mainpage.css'

function Mainpage(){





    return(
        <>
        
         <div className="Page2container">
            <Navbar/>
         

            <div className="Hero1">
                    <Hero/>    
              </div>       
                    <div className ="overlayMain">

                            <h1>Reuben Jaggers Portfolio </h1>  

                            </div>
                           


                       
                
         </div>
       </>
    )
}

export default Mainpage;
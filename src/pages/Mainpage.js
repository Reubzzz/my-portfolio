
import Hero from '../componets/Hero'
import Navbar from '../componets/navbar'
import './Mainpage.css'

function Mainpage(){





    return(
        <>
        <Navbar/>
         <div className="Page2container">

         

            <div className="Hero1">
                    <Hero/>    
                    
                    <div className ="overlayMain">

                            <h1>Reuben Jaggers Portfolio </h1>  

                            </div>
                           


            </div>            
                
         </div>
       </>
    )
}

export default Mainpage;
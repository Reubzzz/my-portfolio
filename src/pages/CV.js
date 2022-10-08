import Pdf from '../componets/Files/CV.pdf';
import "./CV.css";

import Navbar from '../componets/navbar'






export default function CV(){
    
    return(
 <>
    <Navbar/>
    <div className="PageCV">  
    
        <div className='Title'>
            <h1>My Resume</h1>
        </div>

        <div className="PDF">
        <embed id ='resume' src= {Pdf}/>
        </div>





    </div>  
</>
    )
}

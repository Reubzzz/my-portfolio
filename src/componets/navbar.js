import {Link,useMatch,useResolvedPath} from 'react-router-dom'
import "./navbar.css";


export default function Navbar() {




    function refreshPage() {
        setTimeout(()=>{
            window.location.reload(false);
        }, 100);
        console.log('page to reload')
    }
    





    return ( 



        <nav className="navbar">
        
                <div className="title">
                <Link to="/" className= "site-title" onClick={refreshPage} >My Portfolio</Link>
                </div>
                            <ul className="nav-links">
                            
                                <input type="checkbox" id="checkbox_toggle" />
                                <label for="checkbox_toggle" className="hamburger">&#9776;</label>
                                
                                <div className="menu">
                                    <li><CustomLink  to="/AboutMe" onClick={refreshPage} >About Me</CustomLink></li>
                                        
                                        <li className="Projects">
                                            <a href="">Projects</a>

                                                <ul className="dropdown">
                                                    <div className="dropdown-content">
                                                        

                                                        <li><CustomLink  to="/ThrillCapital" onClick={refreshPage}>Thrill Capital</CustomLink></li>
                                                        <li><CustomLink to="/Engines"onClick={refreshPage}>Unreal and Unity</CustomLink></li>
                                                        <li><CustomLink to="/Blender"onClick={refreshPage}>Blender</CustomLink></li>
                                                            


                                                            <li className="ThreeProjects">
                                                                <a href="">Three</a>
                                                                    <ul className="dropdown2">
                                                                        <div className="dropdown2-content">
                                                                        
                                                                            <li><CustomLink to="/Three"onClick={refreshPage}>ThreeProjects</CustomLink></li>
                                                                            <li><CustomLink to="/ThreeBitsandBobs"onClick={refreshPage}>ThreeBits@Bobs</CustomLink></li>
                                                                        </div>
                                                                    </ul>
                                                            </li>
                                                    
                                                    
                                                    </div>
                                                </ul>
                                        </li>                                       
                                    <li><CustomLink to="/CV" onClick={refreshPage}>My CV</CustomLink></li>
                                
                                </div>
                            </ul>
      </nav>



























    // <nav className="nav">

        

    //         <Link to="/" className= "site-title" onClick={refreshPage} >My Portfolio</Link>

    //     <div className="menu">   

    //                 <ul>
    //                     <CustomLink  to="/AboutMe" onClick={refreshPage} >About Me</CustomLink>

    //                 <div class="dropdown">
    //                     <button class="dropbtn" onClick={refreshPage}>Projects
    //                     </button>   
    //                             <div class="dropdown-content">
    //                                 <CustomLink  to="/ThrillCapital" onClick={refreshPage}>Thrill Capital</CustomLink>
    //                                 <CustomLink to="/Engines"onClick={refreshPage}>Unreal and Unity</CustomLink>
    //                                 <CustomLink to="/Blender"onClick={refreshPage}>Blender</CustomLink>
    //                                 <div class="dropdownthree">
    //                                     <button class="dropbtn2" onClick={refreshPage}>ThreeJS
    //                                     </button>
    //                                         <div class="dropdown2-content">
    //                                             <CustomLink to="/Three"onClick={refreshPage}>ThreeProjects</CustomLink>
    //                                             <CustomLink to="/ThreeBitsandBobs"onClick={refreshPage}>ThreeBits@Bobs</CustomLink>
    //                                         </div>
    //                                 </div> 
    //                             </div>
                        
    //                     </div>

    //                     <CustomLink to="/CV" onClick={refreshPage}>My CV</CustomLink>   
    //                 </ul>


    //     </div> 
    // </nav>
    )
}


function CustomLink({to, children, ...props}) {
const resolvedPath = useResolvedPath(to)
const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : "" }>
            <Link to={to} {... props}>{children}</Link>
        </li> 
    )

}
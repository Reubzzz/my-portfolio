import {Link,useMatch,useResolvedPath} from 'react-router-dom'
import "./navbar.css";

import { useState } from "react";


export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);




    function refreshPage() {
        setTimeout(()=>{
            window.location.reload(false);
        }, 100);
        console.log('page to reload')
    }
    





    return ( 



        <nav className="navbar">
        
                <div className="title">
                    <li><Link to="/" className= "site-title" onClick={refreshPage} >My Portfolio</Link></li>
                </div>
                            <ul className="nav-links">
                            
                                <input type="checkbox" id="checkbox_toggle" />
                                <label for="checkbox_toggle" className="hamburger">&#9776;</label>
                                
                                <div className="menu">
                                
                                        
                                            <li className="Projects">
                                                <p>Projects</p>

                                                    <ul className="dropdown">
                                                        <div className="dropdown-content">
                                                            

                                                            <li><CustomLink  to="/ThrillCapital" onClick={refreshPage}>Thrill Capital</CustomLink></li>
                                                            <li><CustomLink to="/Engines"onClick={refreshPage}>Unreal and Unity</CustomLink></li>
                                                            <li><CustomLink to="/Blender"onClick={refreshPage}>Blender</CustomLink></li>
                                                                


                                                                <li className="ThreeProjects">
                                                                    <p>Three</p>
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
                                        <li><CustomLink  to="/AboutMe" onClick={refreshPage} >About Me</CustomLink></li>                                       
                                    <li><CustomLink to="/CV" onClick={refreshPage}>My CV</CustomLink></li>
                                
                                </div>
                            </ul>
      </nav>





//     <nav className="navigation">
//     <a href="/" className="brand-name">
//       MacroSoft
//     </a>
//     <button
//       className="hamburger"
//       onClick={() => {
//         setIsNavExpanded(!isNavExpanded);
//       }}
//     >
//       {/* icon from Heroicons.com */}
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-5 w-5"
//         viewBox="0 0 20 20"
//         fill="white"
//       >
//         <path
//           fillRule="evenodd"
//           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
//           clipRule="evenodd"
//         />
//       </svg>
//     </button>
//     <div
//       className={
//         isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
//       }
//     >
//       <ul>
//         <li>
//           <a href="/home">Home</a>
//         </li>
//         <li>
//           <a href="/about">About</a>
//         </li>
//         <li>
//           <a href="/contact">Contact</a>
//         </li>
//       </ul>
//     </div>
//   </nav>
// );
// }






















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
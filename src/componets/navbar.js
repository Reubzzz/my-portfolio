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
    <nav className="nav">

            <Link to="/" className= "site-title" onClick={refreshPage} >My Portfolio</Link>
        <ul>
            <CustomLink  to="/AboutMe" onClick={refreshPage} >About Me</CustomLink>

        <div class="dropdown">
            <button class="dropbtn" onClick={refreshPage}>Projects
            </button>   
                    <div class="dropdown-content">
                        <CustomLink  to="/ThrillCapital" onClick={refreshPage}>Thrill Capital</CustomLink>
                        <CustomLink to="/Engines"onClick={refreshPage}>Unreal and Unity</CustomLink>
                        <CustomLink to="/Blender"onClick={refreshPage}>Blender</CustomLink>
                        <div class="dropdownthree">
                            <button class="dropbtn2" onClick={refreshPage}>ThreeJS
                            </button>
                                <div class="dropdown2-content">
                                    <CustomLink to="/Three"onClick={refreshPage}>ThreeProjects</CustomLink>
                                    <CustomLink to="/ThreeBitsandBobs"onClick={refreshPage}>ThreeBits@Bobs</CustomLink>
                                </div>
                        </div> 
                    </div>
            
            </div>

            <CustomLink to="/CV" onClick={refreshPage}>My CV</CustomLink>   
        </ul>
    </nav>
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
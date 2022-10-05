// main pages
import Home from './pages/Home'
import Mainpage from './pages/Mainpage';
import Cv from './pages/CV';
import About from './pages/WhoAmI';
// Subpages
import Thrillcapital from './pages/subpages/ProjectThrill';
import Engines from './pages/subpages/ProjectUnityUnreal';
import Blender from './pages/subpages/Blender';
import Three from './pages/subpages/threeFile';
import ThreeBitsandBobs from './pages/subpages/Threebitsandbobs';
import {Route, Routes,} from "react-router-dom"
import {HashRouter} from "react-router-dom"

import { Link } from "react-router-dom";


function App() {
  return (
    <>
    
      <div className="heroContainer">
            <div className="container">





            {/* <Link to="/my-portfolio" element={<Home />} ></Link> */}



            
                <Routes>
                  <Route path ="/" element={<Home />} />
                  <Route path ="/Mainpage" element={<Mainpage />} />
                  <Route path ="/CV" element={<Cv />} />
                  <Route path ="/AboutMe" element={<About />} />

                  <Route path ="/ThrillCapital" element={<Thrillcapital />} />
                  <Route path ="/Engines" element={<Engines />} />
                  <Route path ="/Blender" element={<Blender />} />
                  <Route path ="/Three" element={<Three />} />
                  <Route path ="/ThreeBitsandBobs" element={<ThreeBitsandBobs />} />
                </Routes>
              
            </div>

            
      </div>
      </> 
  );
}

export default App;

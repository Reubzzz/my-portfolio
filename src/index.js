import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Mainpage from './pages/Mainpage';
import Cv from './pages/CV';
import About from './pages/WhoAmI';
// Subpages
import Thrillcapital from './pages/subpages/ProjectThrill';
import Engines from './pages/subpages/ProjectUnityUnreal';
import Blender from './pages/subpages/Blender';
import Three from './pages/subpages/threeFile';
import ThreeBitsandBobs from './pages/subpages/Threebitsandbobs';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

<HashRouter>
 <Routes>
          <Route path="/" element={<App/>} />
          <Route path ="/Mainpage" element={<Mainpage />} />
          <Route path ="/CV" element={<Cv />} />
          <Route path ="/AboutMe" element={<About />} />

                  <Route path ="/ThrillCapital" element={<Thrillcapital />} />
                  <Route path ="/Engines" element={<Engines />} />
                  <Route path ="/Blender" element={<Blender />} />
                  <Route path ="/Three" element={<Three />} />
                  <Route path ="/ThreeBitsandBobs" element={<ThreeBitsandBobs />} />
 </Routes>
 </HashRouter>














    {/* <HashRouter> */}
      {/* <BrowserRouter>
          <App />
      </BrowserRouter> */}
      {/* </HashRouter> */}
  </React.StrictMode>
);

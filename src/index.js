import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter, Routes, Route } from "react-router-dom";
import App from './App';


import Mainpage from './pages/Mainpage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

<HashRouter>
 <Routes>
 <Route path="/" element={<App/>} />
 <Route path ="/Mainpage" element={<Mainpage />} />
 </Routes>
 </HashRouter>














    {/* <HashRouter> */}
      {/* <BrowserRouter>
          <App />
      </BrowserRouter> */}
      {/* </HashRouter> */}
  </React.StrictMode>
);

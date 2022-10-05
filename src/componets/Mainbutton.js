import React from 'react';
import ReactDOM from 'react-dom/client';

import './Mainbutton.css'

import { Link } from 'react-router-dom';





 function Button() {


  function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 100);
    console.log('page to reload')
}


  
  // delay();
  
    return (
      <Link to="/Mainpage" onClick={refreshPage}>
        <button id="nextPlace" >Take A Journey</button>
        </Link>
      
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Button />);

  export default Button;
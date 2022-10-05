import { useEffect, useState } from 'react';
import * as THREE from 'three' ;


function Slideshow() {

  useEffect(() => {


  //Scene
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    );

    //position of camera
    camera.position.z = 1;




// call Functions and settings
var scroll = 0;
var scrollTarget = 0;
var currentScroll = 0;




scrollEvent();



function scrollEvent(){
  document.addEventListener('mousewheel',(e)=>{
    scrollTarget = e.wheelDelta * 0.3;
  })
}




    const canvas = document.getElementById('myCloudjannit');

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    








    const geometry = new THREE.PlaneGeometry( 1, 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    
    const meshes = []
    const n = 10

    for (let i = 0; i < n; i++) {
       let mesh = new THREE.Mesh(
        geometry,
        material

       )
      meshes.push({

        mesh,
        
        index: i,
      });
      scene.add(mesh)
    }



animate();










function updateMeshes() 
{
  var margin = 1.1
  var wholeWidth = n * margin
    meshes.forEach((o=>{
        o.mesh.position.x = (margin * o.index + currentScroll + 42069 * 
          wholeWidth) % wholeWidth - 2* margin
      }))
}


    





  //Animate Function
  function animate() {
      

    updateMeshes()
    scroll += (scrollTarget - scroll) * 0.1
    scroll *= 0.9;
    scrollTarget *=0.9;
    console.log(scroll)
    currentScroll +=scroll* 0.01;



      renderer.render(scene,camera);
      requestAnimationFrame(animate);
  }



  },[]);






  return (
    <div>
      <canvas id="myCloudjannit" />
      
    </div>
  )
}



export default Slideshow






















































































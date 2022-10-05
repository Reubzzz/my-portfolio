import { useEffect, useState } from 'react';
import * as THREE from 'three' ;
import { DirectionalLight } from 'three';

import Smoke from '../../../img/smoke.png';


function Nebular() {




  useEffect(() => {

    var cloudParticles = [],
      flash,
      rain
      
      

      const velocity = [];
    
    


    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );

    //position of camera
    camera.position.z = 1;
    camera.rotation.x = 1.16;
    camera.rotation.y = -0.12;
    camera.rotation.z = 0.27;

    const canvas = document.getElementById('Nebular');

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //Lights

    const ambientLight = new THREE.AmbientLight(0x555555);
      scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xff8c19);
      directionalLight.position.set(0,0,1)
      scene.add(directionalLight);

    const orangeLight = new THREE.PointLight(0xcc6600,10,450,2.2);
    orangeLight.position.set(100,300,100)
      scene.add(orangeLight);

      const redLight = new THREE.PointLight(0xd8547e,10,450,2.2);
      redLight.position.set(100,500,100)
      scene.add(redLight);

      const blueLight = new THREE.PointLight(0x3677ac,10,450,2.2);
      blueLight.position.set(200,100,200)
      scene.add(blueLight);

    //   //lightning
     flash = new THREE.PointLight(0x062d89, 30, 500 ,1.7);
      flash.position.set(200,300,100);
      scene.add(flash);



  //FOG
  scene.fog = new THREE.FogExp2(0x03544e, 0.001);
  renderer.setClearColor(scene.fog.color);


  



      let loader = new THREE.TextureLoader();
      loader.load(Smoke, function (texture){

        const cloudGeo = new THREE.PlaneGeometry(500,500);
        const cloudMaterial = new THREE.MeshLambertMaterial({
          map: texture,
          transparent: true
        });

        for(let p=0; p<50; p++) {
          let cloud = new THREE.Mesh(cloudGeo,cloudMaterial);
          cloud.position.set(
            Math.random()*800 -400,
            500,
            Math.random()*500 - 500
          );
          cloud.rotation.x = 1.16;
          cloud.rotation.y = -0.12;
          cloud.rotation.z = Math.random()*2*Math.PI;
          cloud.material.opacity = 0.55;
          cloudParticles.push(cloud);
          scene.add(cloud);
        }
          animate();
          
      });
  

  //Animate Function
  function animate() {
      
    

    cloudParticles.forEach(p => {
      p.rotation.z -=0.001;
    });

    //lighting animation
    if(Math.random() > 0.93 || flash.power > 100) {
      if(flash.power < 100)
      flash.position.set(
        Math.random()*400,
        300 + Math.random()*200,
        100
      );
      flash.power = 10 + Math.random()* 100;
    }







      renderer.render(scene,camera);
      requestAnimationFrame(animate);
  }



  },[]);






  return (
    <div>
      <canvas id="Nebular" />
      
    </div>
  )
}

export default Nebular

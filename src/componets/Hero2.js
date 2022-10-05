import { useEffect} from 'react';
import * as THREE from 'three' ;
import gsap from 'gsap'

import Smoke from '../img/smoke.png';


function Hero2() {




  useEffect(() => {

    var  portalParticles = [],
          smokeParticles = [] ;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 605;

    const canvas = document.getElementById('myCloudjannit');
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);





    //Light

    const ambientLight = new THREE.AmbientLight(0xffffff,0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff,1);
    spotLight.castShadow= true;
    spotLight.position.set(0,64,32);
    scene.add(spotLight);


    
//ParticleCloud
    particleSetup();

    function particleSetup() {



    const portalLight = new THREE.PointLight(0x062d89, 30, 600, 1.7);
            portalLight.position.set(0,0,250);
            scene.add(portalLight);



      let loader = new THREE.TextureLoader();

      loader.load(Smoke, function (texture){
         const portalGeo = new THREE.PlaneGeometry(350,350);
         const portalMaterial = new THREE.MeshStandardMaterial({
              map:texture,
              transparent: true
          });
          const smokeGeo = new THREE.PlaneGeometry(1000,1000);
          const smokeMaterial = new THREE.MeshStandardMaterial({
              map:texture,
              transparent: true
          });

          for(let p=880;p>250;p--) {
              let particle = new THREE.Mesh(portalGeo,portalMaterial);
              particle.position.set(
                  0.5 * p * Math.cos((4 * p * Math.PI) / 180),
                  0.5 * p * Math.sin((4 * p * Math.PI) / 180),
                  0.1 * p
              );
              particle.rotation.z = Math.random() *360;
              portalParticles.push(particle);
              scene.add(particle);
          }

          for(let p=0;p<40;p++) {
              let particle = new THREE.Mesh(smokeGeo,smokeMaterial);
              particle.position.set(
                  Math.random() * 1000-500,
                  Math.random() * 400-200,
                  25
              );
              particle.rotation.z = Math.random() *360;
              particle.material.opacity = 0.6;
              portalParticles.push(particle);
              scene.add(particle);
          }
          
          animate();
          
      });



  }





//BUTTON 

let clicked = 1
const tl = gsap.timeline();
const durations = 1.0
const ease = 'none';
let animationisDone = false;

document.getElementById("nextPlace").addEventListener("click", nextPlace, false);


function nextPlace() {

    if(!animationisDone){
        animationisDone = true

      if  (clicked = 1) 
      {
            tl.to(camera.position, {
              z:20,
              durations,
              ease,
              onUpdate: function() {
                // camera.lookat(0,0,0);
              }
            })

      }

    }
}















  //Animate Function
  function animate() {
      
      portalParticles.forEach(p => {
          p.rotation.z -= .002;
      });
      smokeParticles.forEach(p => {
          p.rotation.z -= .002;
      });

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

export default Hero2

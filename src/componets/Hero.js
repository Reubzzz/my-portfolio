import { useEffect} from 'react';
import * as THREE from 'three' ;
import Smoke from '../img/smoke.png';


function Hero() {


  useEffect(() => {

    var cloudParticles = [],
      flash,
      rain
      
      

      const velocity = [];
    
    


    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth /  window.innerHeight,
      0.1,
      2000
    );

    //position of camera
    camera.position.z = 2;
    camera.rotation.x = 1.16;
    camera.rotation.y = -0.12;
    camera.rotation.z = 0.27;

    const canvas = document.getElementById('Hero');

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //Light

    const ambientLight = new THREE.AmbientLight(0x555555);
      scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffeedd);
      directionalLight.position.set(0,0,1);
      scene.add(directionalLight);

      //lightning
     flash = new THREE.PointLight(0x062d89, 30, 500 ,1.7);
      flash.position.set(200,300,100);
      scene.add(flash);



  //FOG
  scene.fog = new THREE.FogExp2(0x1c1c2a, 0.002);
  renderer.setClearColor(scene.fog.color);








//Raining added
      const geometry = new THREE.BufferGeometry();
      const vertices = [];
    
      for (let i = 0; i < 5000; i++) {
        var rainDrop = new THREE.Vector3(
          Math.random() * 400 - 200,
          Math.random() * 500 - 250,
          Math.random() * 400 - 200
        );
    
        vertices.push(rainDrop.x, rainDrop.y, rainDrop.z);
        velocity.push(0);
    
      }
    
      const positionAttribute = new THREE.Float32BufferAttribute(vertices, 3)
    
      positionAttribute.setUsage(THREE.DynamicDrawUsage);
      geometry.setAttribute('position', positionAttribute);
    
      const material = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.4,
        transparent: true
      });
      rain = new THREE.Points(geometry, material);
      scene.add(rain);



const Size = 500;


      let loader = new THREE.TextureLoader();
      loader.load(Smoke, function (texture){

        const cloudGeo = new THREE.PlaneGeometry(Size,Size);
        const cloudMaterial = new THREE.MeshLambertMaterial({
          map: texture,
          transparent: true
        });

        for(let p=0; p<25; p++) {
          let cloud = new THREE.Mesh(cloudGeo,cloudMaterial);
          cloud.position.set(
            Math.random()*800 -400,
            500,
            Math.random()*500 - 450
          );
          cloud.rotation.x = 1.16;
          cloud.rotation.y = -0.12;
          cloud.rotation.z = Math.random()*360;
          cloud.material.opacity = 0.6;
          cloudParticles.push(cloud);
          scene.add(cloud);
        }
          animate();
          
      });



  

  //Animate Function
  function animate() {
      
    
    //cloud movement
    cloudParticles.forEach(p => {
      p.rotation.z -=0.0005;
    });

    //lighting animation
    if(Math.random() > 0.93 || flash.power > 100) {
      if(flash.power < 100)
      flash.position.set(
        Math.random()*400,
        300 + Math.random()*200,
        100
      );
      flash.power = 50 + Math.random()* 500;
    }




//raining Animation

    const positionAttribute = rain.geometry.getAttribute('position');

    for (let i = 0; i < positionAttribute.count; i++) {
  
      velocity[i] -= 0.1 + Math.random() * 0.1;
  
      let y = positionAttribute.getY(i);
  
      y += velocity[i];
  
      if (y < -200) {
  
        y = 200;
        velocity[i] = 0;
  
      }
  
      positionAttribute.setY(i, y);
  
    }
  
    positionAttribute.needsUpdate = true;
  
    rain.rotation.y += 0.002;
  







      renderer.render(scene,camera);
      requestAnimationFrame(animate);
  }



  },[]);






  return (
    <div>
      <canvas id="Hero" />
      
    </div>
  )
}

export default Hero

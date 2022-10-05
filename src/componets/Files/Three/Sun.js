import { useEffect, useState } from 'react';
import * as THREE from 'three' ;

import gsap from 'gsap'

import * as dat from 'dat.gui'


//sun
import atmosphereVertexShader from './Shaders/Sun/atmosphereVertex.glsl';
import atmosphereFragmentShader from './Shaders/Sun/atmosphereFragment.glsl';
import vertexShader  from './Shaders/Sun/vertex.glsl';
import fragmentShader  from './Shaders/Sun/fragment.glsl';



function CrazyGlobe() {




  useEffect(() => {



    const canvas = document.getElementById('CrazyGlobe');
      
      
              // //GUI CONSOLE
              // const gui = new dat.GUI()
              // const world = {
              //   plane: {
              //     width: 120,
              //     height: 120,
              //     widthSegments: 80,
              //     heightSegments: 80
              //   }
              // }
              // gui.add(world.plane, 'width', 1, 500).
              // onChange (generatePlane)
              // gui.add(world.plane, 'height', 1, 500).
              // onChange (generatePlane)
              // gui.add(world.plane, 'widthSegments', 1, 100).
              // onChange (generatePlane)
              // gui.add(world.plane, 'heightSegments', 1, 100).
              // onChange (generatePlane)
      
      
      //creating Plane
              function generatePlane() {
                planeMesh.geometry.dispose()
                planeMesh.geometry = new THREE.SphereGeometry(
                    120,
                    120,
                    80,
                    80
                  )
                
                const {array} = planeMesh.geometry.
                  attributes.position
                  const randomValues = []
                  for (let i = 0; i < array.length; i++ ) {
                    if(i % 3 === 0) {
                    const x = array[i]
                    const y = array [i + 1]
                    const z = array [i + 2]
                  
                    const vert = 2
                    array[i] = x + (Math.random() 
                    -0.5) * vert
                    array[i + 1] = y + (Math.random() 
                    -0.5) * vert
                    array[i + 2] = z + (Math.random() 
                    - 0.5) * vert
                  }
                  
                  randomValues.push(Math.random() * Math.PI * 2)
                  
                  }
                  //random values
                  planeMesh.geometry.attributes.position.
                  randomValues = randomValues
                  //saving possition of vertices as an array.
                  planeMesh.geometry.attributes.position.
                  originalPosition =
                  planeMesh.geometry.attributes.position.array
      
      
      
              const colors = []
      
              for (let i = 0; i < planeMesh.geometry
                .attributes.position.count; i++) {
              // RED (1,0,0) GREEN (0,1,0) BLUE (0,0,1) nice collor (0,.19,0.4) black cool looking (0.003,0.052,0.09)
      
              const newR = 0
              const newG = .19
              const newB = 0.4
              colors.push(newR,newG,newB)
              }
      
              planeMesh.geometry.setAttribute(
                'color',
              new THREE.BufferAttribute(new
                Float32Array (colors),3)
                )
      
              }
      
              const raycaster = new THREE.Raycaster()
              const scene = new THREE.Scene()
              const camera = new THREE.
              PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                2000
              )
              
              const renderer = new THREE.WebGLRenderer
              ( {
                canvas,
                antialias: true,
              } );
      
              renderer.setSize(window.innerWidth , window.innerHeight,
                )
              renderer.setPixelRatio(devicePixelRatio)
              document.body.appendChild(renderer.domElement)
      
              // new OrbitControls(camera, renderer.domElement);
              camera.position.z = 105
      
      
      
             
      
              //STAR GENERATOR
              function generatestars () {
      
                const StarsGeometry = new THREE.BufferGeometry()
                          
                const StarsMaterial = new THREE.PointsMaterial({ color: 0xffffff })
                
                const starVertices = []
                    for (let i = 0; i < 1000000  ; i++) 
                    {
                      const x = (Math.random() -0.5 ) * 20000
                    
                
                      const y = (Math.random() -0.5 ) * 20000
                    
                
                      const z = (-Math.random() -0.5 )* 10000 
                
                      const z2 = (+Math.random() -0.5 )* 10000 
                
                
                      starVertices.push(x,y,z,z2)
                    }
                
                        StarsGeometry.setAttribute(
                          'position',
                        new THREE.Float32BufferAttribute(
                          starVertices, 3))
                
                        const stars = new THREE.Points
                        (StarsGeometry,StarsMaterial)
                
                        scene.add(stars)
      
      
      
              }
      
      
      
      //PLANE SPAWN SETTINGS 
              const planeGeometry = new THREE.SphereGeometry(
                120,
                120,
                80,
                80
                )
              const planeMaterial = new THREE.MeshPhongMaterial({
                side : THREE.DoubleSide,
                // flatShading: THREE.FlatShading,
                vertexColors: true})
              const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
              scene.add(planeMesh)
      
              planeMesh.position.set(0, -120, 0); 







            //   const deepSun = new THREE.Mesh(new THREE.SphereGeometry(325, 100, 100),
            //   new THREE.ShaderMaterial
            //   ({
            //     // vertexShader,
            //     // fragmentShader,
            //     uniforms: 
            //     {
            //         globeTexture: 
            //         {
            //           value: new THREE.TextureLoader().load('../../../img/sun.jpg')
            //         }
            //     }
  
            //   })
            // )
  
            // deepSun.position.set(1050, 400, -850);  
            // scene.add(deepSun)
  


          //   const SunGeometry = new THREE.SphereGeometry(325, 100, 100)
          //   const Sunmaterial = new THREE.ShaderMaterial({
          //     vertexShader : atmosphereVertexShader,
          //     fragmentShader : atmosphereFragmentShader,
          //     side: THREE.BackSide
          // })
  
  
          //   const SunAtmosphere = new THREE.Mesh(SunGeometry, Sunmaterial )
          //   SunAtmosphere.scale.set(1.2 , 1.2 , 1.2)    
          //   SunAtmosphere.position.set(1050, 400, -850);  
          //   scene.add(SunAtmosphere)
  
      
      

      
      
                  
      
      //LIGHTING
                  let ambient = new THREE.AmbientLight(0x555555);
                  scene.add(ambient);
                  
                  let directonal = new THREE.DirectionalLight(0xff8c19)
                  directonal.position.set(0, 800, -250);
                  scene.add(directonal);
      
      
      
      
      
      
      //GENERATING FUCNTIONS            
              generatePlane()
              generatestars ()
      
      
      
      //SETTING MOUSE X AND Y
              const mouse = {
                x:undefined,
                y:undefined
              }
      
      
              let frame = 0
      
      

      
      
      
      
      
      
      
              //looping animate Function
      function animate() {
      
                requestAnimationFrame(animate)
                renderer.render(scene,camera)
                raycaster.setFromCamera(mouse, camera)
                frame += 0.01
              //asteroid
                planeMesh.rotation.y += 0.0009
                planeMesh.rotation.x += 0.0009
                planeMesh.rotation.z += 0.0009
      
             
              const { 
                array,
                originalPosition,
                randomValues
              } = planeMesh.geometry.attributes.
              position
              for (let i = 0; i < array.length; i += 
                3) {
                  // x
                  array[i] = originalPosition [i] +
                    Math.cos(frame + randomValues[i]) 
                    * .01
      
                  // y
                  array[i + 1] = originalPosition [i + 1] +
                  Math.sin(frame + randomValues[i + 1]) 
                  * .01
              }
      
              planeMesh.geometry.attributes.position.
              needsUpdate = true
      
                //AM I TOUCHING OBJECT
                
                const intersects = raycaster.
                  intersectObject(planeMesh)
                  //COLOR CHANGE WHEN TOUCHING
                  if (intersects.length > 0) {
                    
      
              //FACES A B C
      
              const {color} = intersects[0].
              object.geometry.attributes 
      
              //Vertice 1 (A)
                    color.setX(intersects[0].face.a,0.1) 
                    color.setY(intersects[0].face.a,0.5)
                    color.setZ(intersects[0].face.a,1)
              //Vertice 2 (B)
                    color.setX(intersects[0].face.b,0.1) 
                    color.setY(intersects[0].face.b,0.5) 
                    color.setZ(intersects[0].face.b,1)
                    
              //Vertice 3 (C)
                    color.setX(intersects[0].face.c,0.1)
                    color.setY(intersects[0].face.c,0.5)    
                    color.setZ(intersects[0].face.c,1)
                    intersects[0].object.geometry.attributes
                    .color.needsUpdate = true
      
      
      
      
              //animate back to original color (GSAP)    0,.19,0.4
              const initalColor = {
                r:  0,
                g:  0.19,
                b: 0.4
              }
              //hover color original 0.1,0.5,1  cool color is 1, 0.2, 0.3,
              const hoverColor = {
                r: 1.0,
                g: 0.2 ,
                b: 0.3
              }
      
                    gsap.to(hoverColor, {
                      r: initalColor.r,
                      g: initalColor.g,
                      b: initalColor.b,
                      onUpdate: () => {
                        //Vertice 1 (A)
                    color.setX(intersects[0].face.a,hoverColor.r) 
                    color.setY(intersects[0].face.a,hoverColor.g)
                    color.setZ(intersects[0].face.a,hoverColor.b)
                        //Vertice 2 (B)
                    color.setX(intersects[0].face.b,hoverColor.r) 
                    color.setY(intersects[0].face.b,hoverColor.g) 
                    color.setZ(intersects[0].face.b,hoverColor.b)
                        //Vertice 3 (C)
                    color.setX(intersects[0].face.c,hoverColor.r)
                    color.setY(intersects[0].face.c,hoverColor.g)    
                    color.setZ(intersects[0].face.c,hoverColor.b)
                    color.needsUpdate = true
                      }
      
                    })
                  }
      }
      
      
              animate()
      
      
      
              window.addEventListener('mousemove', (event) => {
                mouse.x = (event.clientX / window.innerWidth
                ) * 2 - 1
                mouse.y = -(event.clientY / window.innerHeight
                ) * 2 + 1
                
              })
      
   



  },[]);






  return (
    <div>
      <canvas id="CrazyGlobe" />
      
    </div>
  )
}

export default CrazyGlobe

















































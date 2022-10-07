import React from 'react';
import "./WhoAmI.css";


import Navbar from '../componets/navbar'




//  c.clearRect ( );

function WhoAmI(){
    return(
        <>
        <Navbar/>
        
         
         <div className="WhoAmIMaincontainer">
           
                <div className='container'>

                    <div className='leftBar'>

                            <div className ="overlayWhoAmI">
                                            <h1>Who I Am ? </h1>

                                            <div className='Me'>
                                                <img src={require('../componets/Files/me.jpg')} />
                                            </div>

                            </div>

                                    <div className = "Blurb">
                                        
                                        <h2>Reuben Jagger</h2>

                                        <p>Software Developer</p>

                                        <p>Front-End / Game-Developer</p>
                                                    
                                    </div>

                    </div>

                        
                    <div className='rightBar'>


                                <div className = "WriteUpAboutMe">
                                    <h2>My Story.</h2>

                                    
                                        <p>
                                            I have worked extremely hard to change my career to work in tech... 
                                         </p>
                                         <br></br>  
                                         <p>
                                            I have always been computer savvy (fixing computers and consoles since I was young) and had an interest in software development but my journey to becoming a developer
                                            began as a blessing in disguise. I was in my twenties and slipped a disc in my lower back which meant I needed to re-evaluate my career path.  
                                            While I was recovering, I studied a Certificate in IT Essentials  where I learnt the basics of computers - from how they are built to how programs run, and how to build websites.
                                            I enjoyed every moment and followed this with lots of self-learning with LinkedIn Learning. 
                                        </p>  
                                        <br></br>  
                                        <p>
                                            When Covid19 kicked in, I took the opportunity to make the jump and continue my studies to become a developer and I joined an accelerator course with Mission Ready.
                                            
                                            Even though most students start with the Level 4 Full Stack course, I pushed myself to go for the next level and successfully completed the Level 5 Advanced Software Development course.  
                                            It covered back-end and front-end skills of software development and I worked hard and learnt a lot about how to create apps with React and Node to the fundaments of AI and Cloud.  
                                            Once complete, I was accepted into the Level 6 programme which includes a 10-week practical internship.


                                        </p>
                                        <br></br>     
                                        <p>
                                            I worked at Thrill Capital with one other intern where I was finally able to use my game development knowledge and
                                            problem-solving to help them take point cloud data and create a solid mesh to be used in the virtual environment in the Unity Engine.
                                            My internship ended but I still helped Thrill Capital with advice for the current interns working on this project.


                                        </p>


                                       

                                </div>
                        </div>
                   

                          


                </div>

                
            
         </div>

</>
    )
}

export default WhoAmI;
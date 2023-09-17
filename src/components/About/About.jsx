import React, { useRef } from 'react'
import code from '../../assets/code.png'
import { projectData } from '../../data'
import { Link } from 'react-router-dom'
import {skillImage} from '../../skillsData' 

function About() {
  return (
    <div className='wrapper w-screen h-fit flex flex-col pt-5 items-center dark:bg-slate-900'>
           
           <div className='w-[200px] flex flex-row justify-between h-[55px] backdrop-blur-sm dark:bg-white/30 bg-black/10 rounded-lg p-2  fixed'>
                   
                   <Link to="#About"><span className='text-[30px]'>👨‍💼</span></Link>
                   <Link to="#Skills"><span className='text-[30px]'>😎</span></Link>
                   <Link to="#Projects" ><span className='text-[30px]'>🙂</span></Link>
           </div>

      <section id={"About"} className='About w-full flex md:flex-row mt-32 gap-28 justify-center items-center flex-col mb-28'>
            
         <div>
            <img src={code} alt=""  className='w-[300px] md:w-[400px]' />
        </div>

        <div className='right-container md:w-[40%] w-[60%] mb-6'>
          <p className='text-2xl text-violet-500 font-semibold' >{"<Nishant>"}</p>

          {/* <h2 className='text-xl dark:text-white'>About</h2> */}
          <h2 className='text-3xl text-orange-500 font-bold'>About Me?</h2>
          <p className='text-[19px] dark:text-white'>
            I am Nishant Rai, a dedicated and driven individual hailing from the vibrant city of Mumbai. Currently, I am pursuing my Bachelor of Engineering in Computer Science and Engineering at Chandigarh University, where I have been honing my skills and knowledge in the ever-evolving field of technology. With a strong foundation in programming languages such as JavaScript, HTML, and CSS, I have also mastered the art of crafting user-friendly and visually appealing web interfaces using frameworks like React and leveraging the power of utility-first CSS with Tailwind.
          </p>

          <p className='text-2xl text-violet-500 font-semibold' >{"</Nishant>"}</p>

        </div>

      </section>


      <section id={"Skills"}className="skills w-full flex gap-5 justify-center items-center flex-col mb-32 mt-8">

      <h2 className='text-orange-500 font-bold text-3xl '>Skills</h2>
      <h2 className='dark:text-white font-bold text-3xl text-violet-500'>What I am capable of?</h2>

      <div className='w-full flex flex-row gap-12 justify-center flex-wrap '>
                  {
                          skillImage.map((image)=>{

                            return(
                            <div className=''>
                                    <img src={image} alt="" width="70" height="70"/>  
                            </div>
                            );
                          })
                  }
      </div>


      </section>

       <section id={"Projects"}className='Projects w-full flex gap-5 justify-center items-center flex-col mb-10'>
              
                <h2 className='text-orange-500 font-bold text-3xl '>Projects</h2>
                <h2 className='dark:text-white font-bold text-3xl text-violet-500'>What I have made ?</h2>

                <div className='w-90% flex flex-col items-center gap-8 md:flex-row md:flex-wrap '>

                  {
                    projectData.map((project)=>{


                      return (
                        <div className='w-[312px] h-[450px] dark:bg-white  bg-slate-100 flex flex-col justify-between pb-5 rounded-lg'>

                             
                              <img src={project.Image} alt=""  className='w-full rounded-lg' />

                              <div className='h-[60%] mx-5 flex flex-col gap-3'>
                              <h3 className='text-violet-500 text-2xl font-semibold'>{project.title}</h3>  
                              <p className='text-black text-[18px] '>{project.description}</p> 

                              <Link to={project.link} target='_blank' className='text-blue-600 underline'>{project.title}</Link>

                              </div>

                        </div>
                      )
                    })
                  }

                      

                </div>

    
             
               
            

              

       </section>



    </div>
  )
}

export default About
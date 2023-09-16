import React from 'react'
import code from '../../assets/code.png'

function About() {
  return (
    <div className='wrapper w-screen h-fit md:h-[600px] flex flex-col pt-16 items-center dark:bg-slate-900'>


      <section className='About w-full flex md:flex-row gap-28 justify-center items-center flex-col '>
            
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



    </div>
  )
}

export default About
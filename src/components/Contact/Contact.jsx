import React from 'react'
import contactMe from "../../assets/contact.jpg"

function Contact() {
  return (
    <div className='w-screen h-fit dark:bg-slate-900 bg-white flex flex-row justify-center items-center pb-7 gap-12'>
      
      
         <img src={contactMe} alt="" className='hidden xl:inline-block'/>
      


      <div>
      <p className='text-2xl text-violet-500 font-semibold mt-10 text-start w-[350px]' >{"<Nishant>"}</p>      
      <h1 className='text-orange-500 text-3xl font-bold mt-3'>Contact me</h1>
      <div className='w-[400px] h-fit mt-7 mb-8 bg-slate-200 dark:bg-slate-800 backdrop-blur-sm  p-4 rounded-lg'>
      <form action="" className='flex flex-col gap-5'>
          

          <div className='flex flex-col'> 
          <label htmlFor="email" className='dark:text-white'>Email</label>
          <input type="email" name="email" id="email" placeholder="Enter your email" className='h-[30px] rounded-lg p-4'/>
          </div>
          
          <div className='flex flex-col'>
          <label htmlFor="number" className='dark:text-white'>Phone Number</label>
          <input type="text" name="number" placeholder="Enter your number" id="number" className='h-[30px] rounded-lg p-4'/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="subject" className='dark:text-white'>What you to contact me for?</label>
            <input type="text" name="subject" placeholder="Enter the subject" id ="subject" className='h-[30px] rounded-lg p-4'/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="message" className='dark:text-white'>Message</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter your message" className='rounded-lg p-4'></textarea>
          </div>

          <button className='w-[100px] h-[60px] bg-violet-500 text-white rounded-lg text-xl'>Submit</button>
          


        </form>


      </div>
      <p className='text-2xl text-violet-500 font-semibold w-[350px] text-start' >{"</Nishant>"}</p>
        
        </div>
    </div>
  )
}

export default Contact
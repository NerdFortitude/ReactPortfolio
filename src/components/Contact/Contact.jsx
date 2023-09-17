import React from 'react'

function Contact() {
  return (
    <div className='w-screen h-[500px] dark:bg-slate-900 bg-white flex'>

      <div>
      <form action="">
          
          <label htmlFor="email" className='dark:text-white'>Email</label>
          <input type="email" name="email" id="email" />

          <label htmlFor="number" className='dark:text-white'>Phone Number</label>
          <input type="text" name="number" id="number" />


        </form>


      </div>
        
    </div>
  )
}

export default Contact
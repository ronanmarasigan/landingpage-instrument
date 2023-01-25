import React from 'react'
import Button from './Button'

const About = () => {
  return (
    <section >
      <div className='mt-[200px]'>
        <img alt="about" src="about1.jpg" className='h-[900px] w-full'/>
        <p id='about' className='text-center font-normal text-[50px] mt-[200px]'>We enrich human lives through <br/> the thoughtful application of <br/> design and technology</p>
      </div>
      <div className='flex lg:flex-row flex-col gap-8 mt-[200px]'>
        <img src='about2.png' alt='about2' className='flex-1 lg:w-[50%] w-full h-[550px]'/>   
        <p className='flex-1 lg:px-[200px] px-0 pt-[100px] text-[24px] '>
            In the summer 2020, we reported our representation data and committed to doing so annually. One year later, we are pleased to share an update on our goals, our progress, and the work that still need to be done.<br/>
            <Button link='explore' text='Learn More'/>
        </p>
      </div>

      <div className='flex lg:flex-row-reverse flex-col gap-8 mt-[200px]'>
        <img src='about3.jpg' alt='about3' className='flex-1 lg:w-[50%] w-full h-[550px]'/>   
        <p className='flex-1 lg:px-[200px] px-0 pt-[100px] text-[24px] '>
            In our third episode of On Air, we explore all that's happened within the last six months, the reality of showing up every day as a BIPOC employee in Corporate America, and our future vision for diversity, equity, and inclusion.<br/>
            <Button link='hero' text='Read More'/>
        </p>
      </div>

      <div className='flex lg:flex-row flex-col gap-8 mt-[200px]'>
        <img src='about4.jpg' alt='about4' className='flex-1 lg:w-[50%] w-full h-[550px]'/>   
        <p className='flex-1 lg:px-[200px] px-0 pt-[100px] text-[24px] '>
            In the summer 2020, we reported our representation data and committed to doing so annually. One year later, we are pleased to share an update on our goals, our progress, and the work that still need to be done.<br/>
            <Button link='explore' text='What We Do?'/>
        </p>
      </div>
  
    </section>
  )
}

export default About
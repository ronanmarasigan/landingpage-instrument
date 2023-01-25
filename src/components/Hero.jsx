import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section id='hero'>
      <div className="flex justify-start p-5 mt-[150px] pb-2 sm:text-[8rem] text-[2rem]">
        <h2><span>Build. </span><span class='tres'><a href='/#'>Grow.</a></span><span> Serve.</span></h2>
      </div>
      <div className="flex justify-start pl-5 sm:w-[50%] w-full">
        <p className="font-normal sm:text-[24px] text-[18px] text-start">We are investing $3 million  over the next three years in our <br/> Build|Grow|Serve program, created to support  and empower Black and underrepresented communities.
        </p>
      </div>
      <div className="flex justify-start p-5 mt-5">
      <Button link='about' text='Learn More'/>
      </div>
      
      
    </section>
  
  )
}

export default Hero
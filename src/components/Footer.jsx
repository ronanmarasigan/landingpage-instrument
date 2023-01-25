import React from 'react'
import Button from './Button'

const Footer = () => {
  return (
    <section id='footer'>
      <div className='flex lg:flex-row flex-col mt-[300px] pb-10'>
        <div className='flex flex-col mr-[150px]'>
          <a href='/home' className='mb-5'>Home</a>
          <a href='/home' className='mb-5'>What we do</a>
          <a href='/home' className='mb-5'>Work</a>
          <a href='/home' className='mb-5'>Who we are</a>
        </div>
        <div className='flex flex-col mr-[50%]'>
        <a href='/home' className='mb-5'>Being here</a>
          <a href='/home' className='mb-5'>Careers</a>
          <a href='/home' className='mb-5'>Contact</a>
          <a href='/home' className='mb-5'>Privacy</a>
        </div>
        <div className='mt-[80px] flex lg:flex-row flex-col'>
        <Button text='NEWSLETTER'/>
        <img src='footer1.png' alt='footer1' className='mt-10 mx-5 lg:w-[60px] w-[40px] lg:h-[60px] h-[40px]'/>
        <img src='footer2.png' alt='footer1' className='mt-10 mx-5 lg:w-[60px] w-[40px] lg:h-[60px] h-[40px]'/>
        <img src='footer3.png' alt='footer1' className='mt-10 mx-5 lg:w-[60px] w-[40px] lg:h-[60px] h-[40px]'/>
        </div>
      </div>
      
    </section>
  )
}

export default Footer
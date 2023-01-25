import React from 'react'
import Button from './Button'

const Contact = () => {
  return (
    <section id='contact'>
        <div className='flex flex-row  mt-[300px] lg:gap-[300px] gap-10 justify-center'>
            <img src='contact1.png' alt='contact' className='w-[150px] h-[70px] rounded-[50px]'/>
            <img src='contact2.jpg' alt='contact' className='w-[150px] h-[70px] rounded-[50px]'/>
        </div>
        <div className='text-center mt-[200px]'>
            <h2 className='font-normal text-[60px] mb-10'>We'd love to be your partner</h2>
            <Button link='footer' text='Get in touch'/>
        </div>
    </section>
  )
}

export default Contact
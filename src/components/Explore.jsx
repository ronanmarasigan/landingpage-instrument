import React from 'react'
import Button from './Button'
const Explore = () => {
  return (
    <section id='explore'>
      <div className='text-center mt-[250px]'>
        <h2 className='text-[40px] font-semibold'>Explore a few of our most <br/>impactful projects</h2>
        <Button text='Our Work'/>
      </div>
      <div className='flex lg:flex-row flex-col gap-10 mt-[200px]'>
        <div>
        <img src='explore1.jpg' alt='explore' className='flex-1  w-full h-[500px] '/>
        <h2 className='font-semibold text-[28px] py-5'>Levi's</h2>
        <p className='w-[500px]'>
            We partnered with Levi's, an icon of American industry and culture, to reimagine levi.com for a new generation of shoppers and digital future of retail.
        </p>
        </div>
        <div>
        <img src='explore2.png' alt='about2' className='flex-1  w-full h-[500px]'/>
        <h2 className='font-semibold text-[28px] py-5'>Dropbox Brand Campaign</h2>
        <p className='w-[500px]'>
          Dropbox is on a path to becomung a multi-product company. To bring their customers new and old along for that journey, we helped reimagine how Dropbox engages with their audience.
            
        </p>
        </div>
      </div>
    </section>
  )
}

export default Explore
import React from 'react'
import heroImage from '../../assets/images/hero-image.png'
import TestimonialList from '../parts/TestimonialList'

function Hero() {
  return (
    <section className=' container relative mx-auto hero-section text-white p-10'>
        <div className="hero-content  grid md:grid-cols-2 items-center">
            <div className="text-content flex flex-col justify-between gap-10 text-center md:text-left ">
                <h2 className='text-3xl font-bold '>FREE Digital Signage Slideshow Player - play images & videos on your TV screens</h2>
                <p className='text-lg font-semibold'>Ditch your USB sticks and show a slideshow on any old TV using a Firestick or Android that you can control from your phone or computer in less than 2 minutes.</p>
                <div className="hero-actions flex items-center justify-center md:justify-start gap-2">
                    <button id='btnLogin' className='login-btn '>LOGIN</button>
                    <button id='btnSignup' className='px-5 py-2 border-2 border-white rounded-full hover:border-bluePrim'> CREATE AN ACCOUNT</button>
                    
                </div>
                <div className="notes text-blue-950">
                <p className='note1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, deserunt.</p>
                <p className='note2'>No credit card needed for signup. Available Worldwide!</p>
                 </div>
                </div>
               
            <div className="image-content w-full">
                <img className='w-full' src={heroImage} alt="hero image" />
            </div>
            
        </div>
        <TestimonialList></TestimonialList>
    </section>
  )
}

export default Hero
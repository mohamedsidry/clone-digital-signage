import React from 'react'
import TestimonialItem from './TestimonialItem'
import { testimonialList } from '../contexts/TestimonialContext'

function TestimonialList() {

  const dispalyTestimonials = ()=>{

     return testimonialList.map((testimonia, index)=>{ return <TestimonialItem testimonia = {testimonia} key={index}></TestimonialItem>})

  }
  return (
    <div className='testimonial grid grid-cols-2 lg:grid-cols-4 gap-5 text-black py-5'>
      {dispalyTestimonials()}
    </div>
  )
}

export default TestimonialList
import React from 'react'
import FeatureList from '../parts/FeatureList'

function Features() {
  return (
    <section className='featues-section p-10 bg-white'>
        <div className="feature-content container relative mx-auto">
        <div className=' feature-header flex justify-center items-end'>
            <h2 className='text-2xl font-semibold'>Why choose PosterBooking?</h2>
        </div>
        <FeatureList></FeatureList>
        </div>
        
    </section>
  )
}

export default Features
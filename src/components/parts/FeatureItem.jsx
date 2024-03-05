import React, { useEffect } from 'react'
import featureIcon from '../../assets/images/feature/time.svg'

function FeatureItem({feature}) {

  return (
    <div className='feature-item px-4 py-8 rounded-md shadow-md grid grid-cols-1 h-full gap-2 border-2 border-orangePrim'>
        <img className='feature-image ' src={feature.image} alt="" />
        
        <div className="feature-text flex flex-col gap-2">
            <h3 className='feature-header font-semibold'>{feature.header}</h3>
            <p className='feature-note text-grayText'>{feature.note}</p>
        </div>
        
        

    </div>
  )
}

export default FeatureItem
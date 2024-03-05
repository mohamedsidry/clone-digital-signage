import React from 'react'
import FeatureItem from './FeatureItem'
import { featuresList } from '../contexts/FeatureContext'

function FeatureList() {

    const displayFeatures = ()=>{

        return featuresList.map((feature, index)=>{return <FeatureItem feature={feature} key={index}></FeatureItem>});

    }
  return (
    <div className='feature-list grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-5 py-5'>
        {displayFeatures()}
    </div>
  )
}

export default FeatureList
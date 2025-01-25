import React from 'react'
import Hero from '../hero/Hero'
import Popular from '../Popular/Popular'
import Ofer from '../Offer/Ofer'
import NewCollection from '../NewCollection/NewCollection'
import NewLatter from '../NewLatter/NewLatter'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Ofer/>
        <NewCollection/>
        <NewLatter/>
    </div>
  )
}

export default Shop

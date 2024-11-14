import React from 'react'
import ServicesHero from '../../components/services/ServicesHero.jsx'
import ServicesExplore from '../../components/services/ServicesExplore'
import ServicesPolyhouse from '../../components/services/ServicesPolyhouse'
import ServicesIrrigation from '../../components/services/ServicesIrrigation'
import ServicesLandscaping from '../../components/services/ServicesLandscaping'
import Testimonials from '../../components/home/Testimonials'

const services = () => {
  return (
    <>
      {/* Hero */}
      <ServicesHero />

      {/* Explore */}
      <ServicesExplore />

      {/* Details Polyhouse*/}
      <ServicesPolyhouse />

      {/* Details Irrigation*/}
      <ServicesIrrigation />

      {/* Details Landscaping*/}
      <ServicesLandscaping />

      {/* testimonials  */}
      <Testimonials/>
    </>
  )
}

export default services
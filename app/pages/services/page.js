import React from 'react'
import ServicesHero from '@/app/components/services/ServicesHero.jsx'
import ServicesExplore from '@/app/components/services/ServicesExplore'
import ServicesPolyhouse from '@/app/components/services/ServicesPolyhouse'
import ServicesIrrigation from '@/app/components/services/ServicesIrrigation'
import ServicesLandscaping from '@/app/components/services/ServicesLandscaping'
import Testimonials from '@/app/components/home/Testimonials'

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
import React from 'react'
import PolyhouseHero from '@/app/components/polyhouse/PolyhouseHero'
import PolyhouseSolutions from '@/app/components/polyhouse/PolyhouseSolutions'
import PolyhouseExplore from '@/app/components/polyhouse/PolyhouseExplore'
import PolyhouseUnlock from '@/app/components/polyhouse/PolyhouseUnlock'
import ContactSection from '@/app/components/contact/ContactSection'

const Polyhouse = () => {
  return (
    <div className=''>
      {/* Hero */}
      <PolyhouseHero />

      {/* Solutions */}
      <PolyhouseSolutions />

      {/* Explore */}
      <PolyhouseExplore />

      {/* Unlock */}
      <PolyhouseUnlock />

      {/* Contact */}
      <ContactSection />
    </div>
  )
}

export default Polyhouse
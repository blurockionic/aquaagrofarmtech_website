import React from 'react'
import PolyhouseHero from '@/app/components/polyhouse/PolyhouseHero'
import PolyhouseSolutions from '@/app/components/polyhouse/PolyhouseSolutions'
import PolyhouseExplore from '@/app/components/polyhouse/PolyhouseExplore'
import PolyhouseUnlock from '@/app/components/polyhouse/PolyhouseUnlock'
import ContactSection from '@/app/components/contact/ContactSection'
import PolyhouseFAQ from '@/app/components/polyhouse/PolyhouseFAQ'

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

      {/* FAQ */}
      <PolyhouseFAQ />

      {/* Contact */}
      <ContactSection />
    </div>
  )
}

export default Polyhouse
import React from 'react'
import ContactHero from '@/app/components/contact/ContactHero'
import ContactForm from '@/app/components/contact/ContactForm'
import ContactSection from '@/app/components/contact/ContactSection'
import ContactOffice from '@/app/components/contact/ContactOffice'

const contact = () => {
  return (
    <div className=''>
      {/* Hero */}
      <ContactHero />

      {/* Form */}
      <ContactForm />

      {/* Section */}
      <ContactSection />

      {/* Office */}
      <ContactOffice />
    </div>
  )
}

export default contact
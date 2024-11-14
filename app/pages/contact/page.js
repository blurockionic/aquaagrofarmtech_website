import React from 'react'
import ContactHero from '../../components/contact/ContactHero'
import ContactForm from '../../components/contact/ContactForm'
import ContactSection from '../../components/contact/ContactSection'
import ContactOffice from '../../components/contact/ContactOffice'

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
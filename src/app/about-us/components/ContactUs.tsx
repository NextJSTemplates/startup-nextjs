import ServiceContactForm from '@/components/Common/ServiceContactForm'
import React from 'react'

const ContactUs = () => {
  return (
    <section className="relative z-10 py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <ServiceContactForm />
          <div className="">
            <h1 className="capitalize font-semibold">What our customers say</h1>
            <p className="text-sm">&quot;The breadth of knowledge and understanding that ELEKS has within its walls allows us to leverage that expertise to make superior deliverables for our customers. When you work with ELEKS, you are working with the top 1% of the aptitude and engineering excellence of the whole country.&quot;</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
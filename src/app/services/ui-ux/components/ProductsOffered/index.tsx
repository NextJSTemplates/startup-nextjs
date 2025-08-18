import SectionTitle from '@/components/Common/SectionTitle'
import Section from '@/components/Section'
import React from 'react'
import { products } from './productsOfferedData'

const ProductsOffered = () => {
  return (
    <Section>
      <SectionTitle title="Everything we offer" className="text-center mb-4" />
      <p className="text-center mb-12 max-w-xl mx-auto">From concept to creation, we deliver premium design solutions that elevate your brand and captivate your audience across every touchpoint.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-4">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col space-y-4 justify-center items-center text-center shadow-sm hover:scale-[1.03] hover:shadow-primary/50 transition duration-300 cursor-pointer p-6 rounded-lg">
            <div className="bg-gradient-to-b from-primary/30 to-primary/10 p-3 rounded-lg">
              <product.icon className="text-white" />
            </div>
            <h3 className="font-medium text-base">
              {product.title}
            </h3>
            <p className="text-sm">{product.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default ProductsOffered
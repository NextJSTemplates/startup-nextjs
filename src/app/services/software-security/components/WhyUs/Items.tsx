import React from 'react'
import Image from 'next/image'

interface ItemProps {
  title: string;
  items: { label: string }[];
}

const Items = ({ title, items }: ItemProps) => {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <h1 className="font-semibold text-2xl mb-4">{title}</h1>
      {items.map((service, index) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          <Image
            src="/images/services/blue-check.svg fill.svg"
            className="h-5 w-5"
            width={6}
            height={6}
            alt="Check"
          />
          <span className="text-sm">{service.label}</span>
        </div>
      ))}
    </div>
  )
}

export default Items
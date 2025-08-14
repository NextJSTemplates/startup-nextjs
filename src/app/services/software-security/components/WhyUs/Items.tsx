import React from 'react'
import SectionTitle from '@/components/Common/SectionTitle';
import { Check } from 'lucide-react';

interface ItemProps {
  title: string;
  items: { label: string }[];
}

const Items = ({ title, items }: ItemProps) => {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <SectionTitle title={title} className="mb-4" />
      {items.map((service, index) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          <Check className="size-5 text-primary" />
          <span className="text-sm">{service.label}</span>
        </div>
      ))}
    </div>
  )
}

export default Items
import React from 'react'
import { HoverBorderGradient } from '../ui/hover-border-gradient'

export default function CustomButton({ title }: { title?: string } = { title: "Get Started" }) {
    return (
        <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-sm font-medium"
        >
            {title}
        </HoverBorderGradient>
    )
}

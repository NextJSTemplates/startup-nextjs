import React from 'react'
import { HoverBorderGradient } from '../ui/hover-border-gradient'
import { useRouter } from 'next/navigation'

type CustomButtonProps = {
    title: string
    link: string
}

export default function CustomButton({ title, link }: CustomButtonProps) {
    const router = useRouter()

    return (
        <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-sm font-medium cursor-pointer"
            onClick={() => router.push(link)}
        >
            {title}
        </HoverBorderGradient>
    )
}

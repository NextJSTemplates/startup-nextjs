import React from 'react'

const CircularBackground = () => {
  return (
    <>
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative w-[400px] h-[400px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-black/10 via-transparent to-transparent" />
        </div>
      </div>
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative w-[350px] h-[350px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-black/10 via-transparent to-transparent" />
        </div>
      </div>
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative w-[300px] h-[300px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-black/10 via-transparent to-transparent" />
        </div>
      </div>
    </>
  )
}

export default CircularBackground
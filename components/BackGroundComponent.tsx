import React, { ReactNode } from 'react'

const BackGroundComponent = ({ children }: { children: ReactNode }) => {
  return (
    <>
    <div className="h-screen w-full py-20 bg-white  dark:bg-black   dark:bg-dot-white/[0.6] bg-dot-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white dark:bg-black bg-dark [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
     
    </div>
    <div className="flex justify-center relative my-20 z-10">
<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] text-center flex flex-col items-center justify-center">
{children}
</div>
    </div>
    </>
  )
}

export default BackGroundComponent

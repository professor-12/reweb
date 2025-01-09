import React from 'react'
import AnimateTwoCards from './animate-two-cards'

const SectionTwo = () => {
      return (
            <div className='relative  pt-20 pb-20'>
                  <div className='container gap-10  flex flex-col  text-white'>
                        <h1 className='text-balance text-center font-heading text-3xl sm:text-5xl font-medium'>Visual editing, built for developers</h1>
                        <p className='text-center sm:text-lg text-balance max-w-[28rem] mx-auto text-muted-foreground'>No need to learn new mental models and frameworks. It feels like editing code, but visually.</p>
                        <AnimateTwoCards />
                  </div>
            </div>
      )
}

export default SectionTwo
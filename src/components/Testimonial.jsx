import React from 'react'
import { testimonial_data } from '../lib/data'

const Testimonial = () => {
      return (
            <div className='text-white container py-20 '>
                  <div className='flex w-full flex-col sm:gap-7 gap-6'>
                        <h1 className='text-center text-white text-balance sm:text-5xl text-3xl tracking-tighter'>What people are saying</h1>
                        <p className='sm:text-lg text-muted-foreground text-center'>Thousands of developers and teams love Reweb.</p>
                        <div className='md:columns-2 columns-1 lg:columns-3 gap-3 space-y-4'>
                              {
                                    testimonial_data.map(({ comment, name, username }, index) => {
                                          return <div className=' rounded-2xl  bg-card w-full'>
                                                <div className='break-inside-avoid rounded-[2rem] text-white  p-7 gap-8 flex flex-col'>
                                                      <h1 className='text-[hsl(var(--foreground))]'>{comment}</h1>
                                                      <div className='flex w-full gap-4 items-center'>
                                                            <div className='size-10 rounded-full bg-green-300'></div>
                                                            <div>
                                                                  <p>{name}</p>
                                                                  <p className='text-muted-foreground'>{username}</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    })
                              }
                        </div>
                  </div>
            </div>
      )
}

export default Testimonial
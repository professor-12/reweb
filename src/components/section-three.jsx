import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'


const list_of_data = [{ title: "Visual Builder", desc: "Edit Tailwind & shadcn/ui components with a visual builder and see your changes in real-time." },
{ title: "Code Export", desc: "Export quality Next.js & Tailwind code. Customize without limits and host anywhere." },
{ title: "Pre-made templates", desc: "Get started quickly with beautifully designed and customizable components and templates." },
{ title: "AI Generations", desc: "Never get stuck on a blank screen. Generate and edit components from a prompt or image." }]
const SectionThree = () => {
      const [index, setIndex] = useState(0)

      const handleChangeIndex = (index = null) => {

            if (index != null) {
                  setIndex(index)
                  return
            }
            setIndex(prev => {

                  if (prev >= list_of_data.length - 1) {
                        return 0
                  }
                  return prev + 1

            })
      }

      return (
            <section className=' text-white pb-20'>
                  <div className='container flex flex-col  gap-10'>

                        <h1 className='text-heading text-3xl sm:text-5xl tracking-tighter mb-10'>Build fast. Stay flexible.</h1>
                        <div>
                              <Carousel />
                        </div>
                        <div className='flex max-md:flex-col gap-11 max-md:hidden'>
                              <div className='space-y-8'>
                                    {
                                          list_of_data.map(({ desc, title }, key) => {
                                                const is_active = key == index
                                                return <div onClick={_ => handleChangeIndex(key)} key={key} className={`relative cursor-pointer ${is_active ? "text-white" : "text-gray-300"} group`}>
                                                      {
                                                            is_active &&
                                                            <ProgressBar handleChangeIndex={handleChangeIndex} />
                                                      }
                                                      <h1 className={`text-lg mb-2 ${is_active ? "text-white" : "text-gray-300"} group-hover:text-slate-300`}>{title}</h1>
                                                      <p class="text-muted-foreground group-hover:text-slate-300">{desc}</p>
                                                </div>
                                          })
                                    }



                              </div>
                        </div>
                        <div className='flex max-md:flex-col gap-11 md:hidden'>
                              <div className='space-y-8'>
                                    {
                                          list_of_data.map(({ desc, title }, key) => {
                                                const is_active = key == index
                                                return <div key={key} className={`relative`}>
                                                      <h1 className={`text-lg mb-2 `}>{title}</h1>
                                                      <p class="text-muted-foreground ">{desc}</p>
                                                </div>
                                          })
                                    }



                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default SectionThree



const ProgressBar = ({ handleChangeIndex }) => {
      const [state, setState] = useState(0)
      useEffect(() => {

            const interval = setInterval(() => {
                  setState((prev => prev >= 100 ? 0 : prev + 1))
            }, 6000 / 100)

            return () => clearInterval(interval)
      }, [])

      useEffect(() => {
            if (state >= 100) {
                  handleChangeIndex()
            }
      }, [state])

      return (
            <div className='h-full  absolute -left-5 bg-secondary w-[4px] rounded-full'>
                  <div style={{ height: `${state}%` }} className='w-full bg-primary-gradient rounded-lg'></div>
            </div>
      )
}
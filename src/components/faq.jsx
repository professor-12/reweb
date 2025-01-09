import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import { list_of_faq } from '../lib/data'
const FAQ = () => {
      const [state, setState] = useState(null)
      return (
            <div className='container text-white py-24'>
                  <div className='flex w-full  flex-col gap-7'>
                        <h1 className='text-white font-heading  text-center tracking-tighter sm:text-5xl'>FAQ</h1>
                        <p className='text-lg text-muted-foreground text-center'>Got other questions? Reach out in our <a href="" className='hover:underline font-semibold'>
                              Discord.
                        </a>
                        </p>
                        <div className='space-y-5'>
                              {
                                    list_of_faq.map((data, index) => {
                                          return <FAQCARD state={state} setState={setState} index={index} {...data} />
                                    })
                              }


                        </div>
                  </div>
            </div>
      )
}

export default FAQ



const FAQCARD = ({ question, answers, state, setState, index }) => {
      const ref = useRef()
      const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] })
      const transform = useTransform(scrollYProgress, [0, 1], [0.92, 1])
      return (
            <motion.div style={{ scale: transform }} ref={ref} className='w-full overflow-hidden px-5  mx-auto bg-card rounded-xl max-w-3xl flex flex-col gap-7 pt-4'>
                  <div onClick={() => setState((prev) => {
                        if (prev == index) {
                              return null
                        }
                        return index
                  })} className='flex gap-4 items-center cursor-pointer'>
                        <button className='bg-[hsl(var(--primary))]/20 rounded-full size-8 flex items-center justify-center relative'>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-4 text-primary-gradient">

                                    <motion.path style={{ rotate: state == index ? 90 : 0 }} d="M12 5v14" className="origin-center transition-transform duration-300 ease-out"></motion.path>
                                    <path d="M5 12h14"></path>
                              </svg>
                        </button>

                        <h1 className='font-semibold text-white text-lg'>{question}</h1>
                  </div>

                  <div className={`overflow-hidden transition-all duration-700 ${state == index ? 'max-h-[1000px]' : 'max-h-0'}`}>
                        <motion.div className={`pl-[48px] pb-5 transition-all duration-200 text-lg  text-muted-foreground`}>
                              <p>{answers}</p>
                        </motion.div>
                  </div>
            </motion.div>
      )
}
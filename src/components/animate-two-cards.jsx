import React, { useRef, useState } from 'react'
import { DeskTopSvg, LogoSvg, Mobile, SettingsSvg } from './svgs'
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion'

const AnimateTwoCards = () => {
      const ref = useRef()
      const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] })
      const [yValue, setYValue] = useState(30)
      const [state, setState] = useState(0)


      const scale = useTransform(scrollYProgress, [0, 1], [0, 1])
      const rotateX = useTransform(scrollYProgress, [0, 1], ["180deg", "0deg"])
      return (
            <div ref={ref} style={{ perspective: "1200px" }} className='md:flex flex max-md:flex-col  gap-10 relative'>
                  <Card setState={setState} state={state} />
                  <motion.div style={{ scale, rotateX }} className='absolute top-[calc(50%-24px)] left-[calc(50%-30px)] z-[200]'>
                        <svg class="h-[52px] w-[78px] lg:h-[69px] lg:w-[104px]" viewBox="0 0 116 77" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="linearGradient1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" class="text-primary-gradient" stop-color="currentColor"></stop><stop offset="100%" class="text-primary" stop-color="currentColor"></stop></linearGradient></defs><path d="M54.2331 74.5945C51.9116 72.781 50.9576 69.7185 51.8388 66.9074C54.1938 59.3939 55.7284 53.1383 56.5382 47.4321L10.7563 75.3928C8.24231 76.9282 5.03984 76.7443 2.71839 74.9309C0.396953 73.1175 -0.556999 70.0549 0.324079 67.2439C4.06743 55.3015 5.73777 46.5369 5.71953 38.1054C5.70129 29.6766 3.99489 21.1067 0.33068 9.54277C-0.564135 6.71882 0.3963 3.63643 2.73683 1.82058C5.07737 0.0047189 8.3017 -0.159595 10.8147 1.40892L56.7566 30.0841C56.0187 23.9404 54.4125 17.3082 51.8454 9.20635C50.9505 6.38239 51.9109 3.30001 54.2515 1.48415C56.592 -0.331707 59.8164 -0.496021 62.3294 1.0725L112.497 32.385C114.577 33.6831 115.835 35.9659 115.823 38.4174C115.812 40.869 114.53 43.1395 112.438 44.4173L62.2709 75.0564C59.757 76.5917 56.5545 76.4079 54.2331 74.5945Z" fill="url(#linearGradient1)"></path></svg>
                  </motion.div>
                  <Card2 state={state} />
            </div>
      )
}

export default AnimateTwoCards


const Card = ({ state, setState }) => {
      const ref = useRef()
      const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] })
      const [yValue, setYValue] = useState(30)
      const rotateY = useTransform(scrollYProgress, [0, 1], ["30deg", "0deg"])
      const handleToggle = (index) => {
            setState(index)
      }
      useMotionValueEvent(rotateY, "change", (latest) => {
            setYValue(latest)

      })
      return <motion.div ref={ref} style={{ transform: `rotateY(${yValue})`, transformOrigin: "center left" }} className='rounded-xl flex flex-col bg-gray-400/60 overflow-hidden h-[420px] w-full'>
            <div className='h-12 bg-[#121212] px-4 flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                        <LogoSvg />
                        <div className='size-8 rounded-md inline-flex items-center justify-center'>
                              <SettingsSvg />
                        </div>
                  </div>
                  <h1 className='text-center'>My App</h1>
                  <div className='flex justify-between  rounded-xl items-center gap-2'>
                        <Mobile />
                        <Mobile />
                        <DeskTopSvg />
                  </div>
            </div>
            <div className='flex-1 sm:p-16 flex flex-col gap-5 w-full bg-card cursor-edit'>
                  <h1 onClick={_ => handleToggle(0)} className={`text-4xl border-2 ${state == 0 ? "border-blue-500" : "border-transparent hover:border-blue-500"} text-white relative`}>
                        Supercharge your development workflow.
                        {
                              state == 0 &&
                              <>
                                    <Dot className={"-top-[0.3rem] -left-[0.3rem]"} />
                                    <Dot className={"-bottom-[0.3rem] -left-[0.3rem]"} />
                                    <Dot className={"-top-[0.3rem] -right-[0.3rem]"} />
                                    <Dot className={"-bottom-[0.3rem] -right-[0.3rem]"} />
                              </>
                        }
                  </h1>
                  <h2 onClick={_ => handleToggle(1)} className={`text-muted-foreground   border-2 ${state == 1 ? "border-blue-500" : "border-transparent hover:border-blue-500"} text-lg max-w-sm fnot-heading text-balance relative`}>Easily manage tasks, issues, and more. <br /> Unlock your team's full potential.
                        {
                              state == 1 &&
                              <>
                                    <Dot className={"-top-[0.3rem] -left-[0.3rem]"} />
                                    <Dot className={"-bottom-[0.3rem] -left-[0.3rem]"} />
                                    <Dot className={"-top-[0.3rem] -right-[0.3rem]"} />
                                    <Dot className={"-bottom-[0.3rem] -right-[0.3rem]"} />
                              </>
                        }
                  </h2>
                  <div onClick={_ => handleToggle(2)} className={`w-min border-2   ${state == 3 ? "border-blue-500" : "border-transparent hover:border-blue-500"} relative  `}>
                        {
                              state == 2 &&
                              <>
                                    <Dot className={"-top-[0.3rem] -left-[0.3rem]"} />
                                    <Dot className={"-bottom-[0.3rem] -left-[0.3rem]"} />
                                    <Dot className={"-top-[0.3rem] -right-[0.3rem]"} />
                                    <Dot className={"-bottom-[0.3rem] -right-[0.3rem]"} />
                              </>
                        }
                        <button className='inline-flex cursor-edit   items-center justify-center gap-2 whitespace-nowrap rounded-[calc(1rem-2px)]  font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[linear-gradient(to_bottom_right,hsl(var(--primary-gradient))_0%,hsl(var(--primary))_60%)] text-primary-foreground hover:bg-[linear-gradient(to_bottom_right,hsl(var(--primary-gradient)/0.9)_0%,hsl(var(--primary)/0.9)_60%)] h-14 px-6 py-3 cursor-edit'>Get Started</button>
                  </div>
            </div>
      </motion.div>
}
const Card2 = ({ state }) => {
      console.log(state)
      const ref = useRef()
      const ref2 = useRef()
      const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "150% end"] })
      const { scrollYProgress: s } = useScroll({ target: ref2, offset: ["center end", "end 150%"] })

      const [yValue, setYValue] = useState(30)

      const rotateY = useTransform(scrollYProgress, [0, 1], ["-30deg", "0deg"])
      const height = useTransform(scrollYProgress, [0, 1], ["0px", "200rem"])
      useMotionValueEvent(rotateY, "change", latest => {
            setYValue(latest)
      })



      return <motion.div ref={ref} style={{ transform: `rotateY(${yValue})`, transformOrigin: "center right" }} className='rounded-xl flex flex-col bg-gray-400/60 overflow-hidden h-[420px] w-full'>
            <div className='h-12 bg-[#121212] flex items-center justify-between'>
                  <div className='bg-card h-full p-5 rounded-tr-2xl items-center flex w-30'>hero.tsx</div>
            </div>
            <motion.code ref={ref2} style={{ maxHeight: height }} className='flex-1  overflow-hidden  text-sm p-5   flex flex-col gap-2 w-full bg-card'>
                  <div>
                        <p><span class="text-[#ffadff]">import</span> <span class="text-[#79c0ff]">Link</span> <span class="text-[#ffadff]">from</span> <span class="text-[#a5d6ff]">"next/link"</span> <span class="text-[#8b949e]">;</span>
                        </p>
                        <p><span class="text-[#ffadff]">import</span> <span class="text-[#8b949e]">{`{`}</span> <span class="text-[#79c0ff]">Button</span> <span class="text-[#8b949e]">{`}`}</span> <span class="text-[#ffadff]">from</span> <span class="text-[#a5d6ff]"><span class="text-[#8b949e]">;</span></span></p>
                  </div>
                  <div>
                        <p><span class="text-[#ffadff]">export</span> <span class="text-[#ffadff]">function</span> <span class="text-[#79c0ff]">Hero</span><span class="text-[#8b949e]">()</span> <span class="text-[#8b949e]"> {"{"}</span></p>
                        <p className='pl-2'> <span class="text-[#ffadff]">return</span><span class="text-[#8b949e]">{"("}</span></p>
                        <p className='pl-4'> <span class="text-[#8b949e]">&lt;</span><span class="text-[#ae8cfd]">section</span> <span class="text-[#79c0ff]">className</span><span class="text-[#8b949e]">=</span><span class="text-[#a5d6ff]">"container flex flex-col gap-8 py-20"</span><span class="text-[#8b949e]">&gt;</span></p>
                        <div className={state == 0 && 'bg-[hsl(var(--primary))]/30'}>
                              <p className='pl-6'><span class="text-[#8b949e]">&lt;</span><span class="text-[#ae8cfd]">h1</span> <span class="text-[#79c0ff]">className</span><span class="text-[#8b949e]">=</span><span class="text-[#a5d6ff]">"font-heading text-4xl font-bold"</span><span class="text-[#8b949e]">&gt;</span></p>
                              <p className='pl-8'>Supercharge your development workflow.</p>
                              <p className='pl-6'><span class="text-[#8b949e]">&lt;/</span><span class="text-[#ae8cfd]">h1</span><span class="text-[#8b949e]">&gt;</span></p>

                        </div>
                        <div className={state == 1 && 'bg-[hsl(var(--primary))]/30'}>
                              <p className='pl-4'>
                                    <span class="text-[#8b949e]">&lt;</span><span class="text-[#ae8cfd]">p</span> <span class="text-[#79c0ff]">className</span><span class="text-[#8b949e]">=</span><span class="text-[#a5d6ff]">"max-w-xl text-xl text-muted"</span><span class="text-[#8b949e]">&gt;</span>
                              </p>
                              <p className='pl-8'> Easily manage tasks, issues, and more. <br />
                                    Unlock your team's full potential.</p>
                              <p className='pl-6'><span class="text-[#8b949e]">&lt;/</span><span class="text-[#ae8cfd]">p</span><span class="text-[#8b949e]">&gt;</span></p>
                        </div>
                        <div className={state == 2 && 'bg-[hsl(var(--primary))]/30'}>
                              <div className='pl-6'>
                                    <span class="text-[#8b949e]">&lt;</span><span class="text-[#79c0ff]">Button</span> <span class="text-[#79c0ff]">size</span><span class="text-[#8b949e]">=</span><span class="text-[#a5d6ff]">"lg"</span>

                              </div>
                              <div className='pl-8'>
                                    <span class="text-[#8b949e]">&lt;</span>
                                    <span class="text-[#79c0ff]">Link</span> <span class="text-[#79c0ff]">href</span><span class="text-[#8b949e]">=</span><span class="text-[#a5d6ff]">"/signup"</span><span class="text-[#8b949e]">&gt;</span><span class="text-[#c6c7c8]">Get Started</span><span class="text-[#8b949e]">&lt;/</span><span class="text-[#79c0ff]">Link</span><span class="text-[#8b949e]">&gt;</span>

                              </div>
                              <div class="pl-6"><span class="text-[#c5c8c6]">      </span><span class="text-[#8b949e]">&lt;/</span><span class="text-[#79c0ff]">Button</span><span class="text-[#8b949e]">&gt;</span></div>
                              <div class="pl-4"><span class="text-[#c5c8c6]">    </span><span class="text-[#8b949e]">&lt;/</span><span class="text-[#ae8cfd]">section</span><span class="text-[#8b949e]">&gt;</span></div>
                        </div>
                        <p>
                              <span class="text-[#8b949e]">{`)`}</span>

                        </p>
                        <p>
                              <div class="h-[18px]"><span class="text-[#8b949e]">{'}'}</span></div>
                        </p>


                  </div>
            </motion.code>
      </motion.div >
}



const Dot = ({ className }) => <div className={'bg-white size-3 rounded-full border-blue-500 border-2 absolute ' + className}></div>
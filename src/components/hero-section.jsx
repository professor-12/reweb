"use client"
import React, { useRef } from 'react';
import { NextJs, Reactjs, Shadcn, Tailwindcss } from './svgs';

import Video3d from './Video3d';
import { useMotionValueEvent, useScroll, useTransform, motion } from 'framer-motion';

const HeroSection = () => {
      const containeref = useRef(null)
      const { scrollYProgress } = useScroll({ target: containeref })
      const scrollY = useTransform(scrollYProgress, [0, 1], [1, 0])
      const [scrollYState, setScrollYState] = React.useState(1)

      useMotionValueEvent(scrollY, "change", (latest) => {
            setScrollYState(latest)
      })
      return (
            <motion.section
                  ref={containeref}
                  style={{
                        backgroundImage:
                              `linear-gradient(to bottom, hsl(var(--background)) 0%, hsl(var(--background)) 10%, hsl(var(--gradient)/${scrollYState}) 100%)`,
                  }}
                  className="py-16 pt-28 bg-no-repeat bg-cover"
            >
                  <div className="container  relative z-20 flex flex-col items-center gap-8 sm:gap-10">
                        {/* Heading */}
                        <h1 className="text-balance text-5xl font-medium tracking-tighter sm:text-6xl lg:text-[5rem] text-center font-heading mb-[-5px] bg-clip-text pb-[5px] text-transparent [background-image:linear-gradient(to_bottom_right,hsl(var(--foreground))_0%,hsl(var(--foreground))_50%,hsl(var(--primary-gradient)/1)_100%)]">
                              The visual builder for <br /> Next.js & Tailwind
                        </h1>
                        <div className='absolute left-[27%] top-56 z-10 hidden size-60 bg-gradient-secondary/55 [filter:blur(190px)] md:block'></div>
                        <div class="absolute -left-32 top-20 z-10 size-52 bg-gradient-secondary/30 [filter:blur(90px)] md:hidden"></div>
                        {/* Subtext */}
                        <p className="max-w-[33rem] text-balance text-center text-lg text-[#d4d8dd] sm:text-xl">
                              Build at the speed of no-code. Export Next.js, Tailwind and shadcn/ui code. Customize without limits.
                        </p>

                        {/* CTA Button */}
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[calc(1rem-2px)] sm:text-lg font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[linear-gradient(to_bottom_right,hsl(var(--primary-gradient))_0%,hsl(var(--primary))_60%)] text-primary-foreground hover:bg-[linear-gradient(to_bottom_right,hsl(var(--primary-gradient)/0.9)_0%,hsl(var(--primary)/0.9)_60%)] h-14 px-4 sm:px-[40px] py-2 cursor-pointer">
                              <span>Build your site</span>
                              <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-chevron-right transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                              >
                                    <path d="m9 18 6-6-6-6"></path>
                              </svg>
                        </button>

                        {/* Technology Logos */}
                        <div className="mx-auto text-white flex items-center gap-5">
                              <NextJs />
                              <Reactjs />
                              <Tailwindcss />
                              <Shadcn />
                        </div>
                        <Video3d />
                  </div>
            </motion.section>
      );
};

export default HeroSection;

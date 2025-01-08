"use client"
import { useScroll, useTransform, motion, useMotionValue, useMotionValueEvent } from 'framer-motion'
import React, { useRef } from 'react'

const Video3d = () => {
      const containerRef = useRef(null)
      const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end end"] })
      const rotate = useTransform(scrollYProgress, [0, 1], [30, 0])
      const scale = useTransform(scrollYProgress, [0, 1], [0.789, 1])
      return (
            <>
                  <div style={{ perspective: "1200px" }} className='container hidden md:flex justify-center'>
                        <motion.div
                              ref={containerRef}
                              className="video-3d-container overflow-hidden rounded-lg aspect-video w-full   bg-background sm:mt-8"
                              style={{
                                    rotateX: rotate,
                                    scaleX: scale,
                                    transformStyle: "preserve-3d",

                              }}

                        >
                              <video
                                    className="rounded-lg w-full h-full duration-500 bg-cover"
                                    poster="https://www.reweb.so/images/landing/hero.png"
                                    muted
                                    playsInline
                                    loop
                                    autoPlay
                                    preload="auto"
                                    src="https://www.reweb.so/videos/hero.mp4"
                              ></video>
                        </motion.div>
                  </div>
                  <motion.div

                        className="hidden max-md:block aspect-video overflow-hidden rounded-lg w-full   bg-white sm:mt-8"
                  >
                        <video
                              className="rounded-lg w-full h-full duration-500 bg-cover"
                              poster="https://www.reweb.so/images/landing/hero.png"
                              muted
                              playsInline
                              loop
                              autoPlay
                              preload="auto"
                              src="https://www.reweb.so/videos/hero.mp4"
                        ></video>
                  </motion.div>
            </>
      )
}
export default Video3d
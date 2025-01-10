"use client"
import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion'
import React, { useRef, useState } from 'react'
import VideoFrame from './VideoFrame'

const Video3d = () => {
      const [playVideo, setPlayVideo] = useState(false)
      const containerRef = useRef(null)
      const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end end"] })
      const rotate = useTransform(scrollYProgress, [0, 1], [30, 0])
      const scale = useTransform(scrollYProgress, [0, 1], [0.789, 1])




      return (
            <>
                  <div style={{ perspective: "1200px" }} className='container hidden md:flex justify-center'>
                        <motion.div
                              ref={containerRef}
                              className="video-3d-container overflow-hidden rounded-lg aspect-video w-full relative  bg-black sm:mt-8"
                              style={{
                                    rotateX: rotate,
                                    scaleX: scale,
                                    transformStyle: "preserve-3d",
                              }}

                        >
                              <AnimatePresence>

                                    {
                                          playVideo &&
                                          <VideoFrame onClick={() => setPlayVideo(false)} />
                                    }
                              </AnimatePresence>
                              <button onClick={() => setPlayVideo(true)} class="absolute left-1/2 top-1/2 -translate-x-1/2 cursor-pointer z-[200] -translate-y-1/2 size-24 rounded-full sm:size-28 bg-[hsl(var(--primary))]/60 flex items-center justify-center backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-[0.8]"><svg width="41" height="48" viewBox="0 0 27 32" fill="none" class="ml-2 text-white"><path d="M24.5 16L2 2V29.5L24.5 16Z" fill="currentColor" stroke="currentColor" stroke-width="4" stroke-linejoin="round"></path></svg></button>
                              <video
                                    className="rounded-lg min-w-full  duration-500 bg-cover"
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

                        className="hidden max-md:block aspect-video relative overflow-hidden rounded-lg w-full   sm:mt-8"
                  >
                        <button onClick={() => setPlayVideo(true)} class="absolute left-1/2 top-1/2 -translate-x-1/2 cursor-pointer z-[200] -translate-y-1/2 size-24 rounded-full sm:size-28 bg-[hsl(var(--primary))]/60 flex items-center justify-center backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-[0.8]"><svg width="41" height="48" viewBox="0 0 27 32" fill="none" class="ml-2 text-white"><path d="M24.5 16L2 2V29.5L24.5 16Z" fill="currentColor" stroke="currentColor" stroke-width="4" stroke-linejoin="round"></path></svg></button>
                        <AnimatePresence>

                              {
                                    playVideo &&
                                    <VideoFrame onClick={() => setPlayVideo(false)} />
                              }
                        </AnimatePresence>
                        <video
                              className="rounded-lg min-w-full h-full duration-500 bg-cover"
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
import React from 'react'
import { createPortal } from 'react-dom'
import { motion } from "framer-motion"
const VideoFrame = ({ onClick }) => {
      return createPortal(
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" id="radix-:R3j9hjrjqqkva:" ariaDescribedby="radix-:R3j9hjrjqqkvaH2:" ariaLabelledby="radix-:R3j9hjrjqqkvaH1:" data-state="open" className="fixed z-[99999999] left-1/2 top-1/2 backdrop-blur-md  w-full -translate-x-1/2 -translate-y-1/2 duration-200 flex h-screen flex-col items-center justify-center bg-transparent px-2 py-40 sm:p-20" tabindex="-1" >

                  <div
                        className="relative size-full pt-[55%]">
                        <iframe class="absolute top-0" width="100%" height="100%" src="https://www.youtube.com/embed/ChGC5pXyxGQ?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="">
                        </iframe>

                  </div>
                  <button onClick={onClick} type="button" className="absolute text-white right-4 top-4 rounded-full bg-secondary p-4 opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:text-muted-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x size-7"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg><span class="sr-only">Close</span></button>
            </motion.div>, document.getElementById("portal")
      )
}

export default VideoFrame
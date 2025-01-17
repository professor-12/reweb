import React, { useState } from 'react'
import { motion, useMotionValue } from "framer-motion"
import { list_of_data } from './section-three'



const list_pf_images = ["bg-red-400", "bg-green-400", "bg-white", "bg-violet-500"]
const Carousel = () => {
      const [index, setIndex] = useState(0)
      const x = useMotionValue(0)


      const onDragEnd = () => {
            const grabX = x.get()

            if (grabX <= 80 && index < list_pf_images.length - 1) {
                  setIndex(prev => prev + 1)
            }
            else if (grabX >= 80) {
                  setIndex(prev => prev - 1)
            }
      }


      return (
            <motion.div className='overflow-hidden md:hidden'>
                  <motion.div onDragEnd={onDragEnd} style={{ x, translateX: `calc(-${index * 100}%` }} transition={{ stiffness: 400, damping: 50, mass: 3, type: 'spring' }} drag="x" dragConstraints={{ left: 10, right: 100 }} className='flex  cursor-grab transition-all  active:cursor-grabbing  -translate-x-10'>
                        {list_of_data.map(({ videoUrl }, id) => (
                              <motion.video key={id} src={videoUrl} animate={{ scale: index == id ? 1 : .9 }} transition={{ stiffness: 400, damping: 50, mass: 3, type: 'spring' }} className={'w-full rounded-lg flex-shrink-0 aspect-video   '} />
                        ))
                        }
                  </motion.div>
            </motion.div >
      )
}

export default Carousel



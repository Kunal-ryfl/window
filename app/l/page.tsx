'use client'
import React from 'react'
import {motion} from 'framer-motion'
const page = () => {
  return (
    <motion.div  initial={{scale:0,y:300,opacity:0}} animate={{scale:1,y:0,opacity:1}} transition={{duration:0.7}}  exit={{scale:0}}  className=' absolute top-0 h-screen w-screen overflow-hidden bg-white'>page</motion.div>
  )
}

export default page
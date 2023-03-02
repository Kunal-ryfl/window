import Link from 'next/link'
import React from 'react'

const Taskbar = () => {
  return (
    
    <div className=' absolute  mx-auto bg-black/30 flex justify-center py-2 bottom-0 w-screen backdrop-blur-sm border-2'> 
    <p className=' text-red-400 mx-2'>Start</p>
    <Link href={'/l'}><p className=' text-red-400'>Link</p></Link>
    </div>
  )
}

export default Taskbar
"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import win11 from '../public/wp9378841-windows-11-wallpapers.jpg'
import Link from 'next/link'
import Taskbar from './(components)/Taskbar'
import Start from './(components)/Start'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [open,setOpen] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='  relative h-screen w-screen' >
    <Image src={win11} fill={true} style={{objectFit: "cover"}} alt='wallpaper' quality={100} 	placeholder="blur" className='-z-10' />

              
        {children}
        
       
        <Start />
        <Taskbar/>
  </div>
        </body>
    </html>
  )
}

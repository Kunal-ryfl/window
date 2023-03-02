'use client'
import { motion, AnimatePresence } from 'framer-motion'
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
     
        <>
        <AnimatePresence mode='wait' onExitComplete={() => window.scrollTo(0, 0)}>
          {children}
        </AnimatePresence>
        </>
    )
  }
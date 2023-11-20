"use client"

import { HTMLMotionProps, motion } from "framer-motion"
import { ReactNode } from "react"

interface FramerDivProps extends HTMLMotionProps<"div"> {
  children: ReactNode
}

export function TextMotion({ children, ...props }: FramerDivProps) {
  return <motion.div {...props}>{children}</motion.div>
}

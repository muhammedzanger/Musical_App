/** @format */
"use client"
import React from "react"
import { motion } from "framer-motion"
import { fadeIn } from "../../../varients"

const SectionHeader = ({ pretitle, title }) => {
  return (
    <header>
      <motion.h3
        variants={fadeIn("up", 0.3)}
        initial='hidden'
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className='text-center pretitle'>
        {pretitle}
      </motion.h3>
      <motion.h2
        variants={fadeIn("up", 0.3)}
        initial='hidden'
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className='text-center h2 mb-8'>
        {title}
      </motion.h2>
    </header>
  )
}

export default SectionHeader

/** @format */
"use client"

import Sochial from "./Sochial"
import Nav from "./Nav"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn } from "../../../varients"
const Footer = () => {
  return (
    <footer className='bg-accent section h-[500px] xl:h-auto'>
      <div className='container mx-auto flex items-center h-full flex-col gap-y-8'>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=''>
          <Link href='#'>
            <h2 className='text-[24px] lg:text-[38px] font-semibold leading-tight'>
              hello@miarernolds.com
            </h2>
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=''>
          <Nav
            containerStyles='flex flex-col xl:flex-row justify-center items-center gap-y-4 xl:gap-x-8
          text-sm uppercase font-semibold'
            linkStyles='hover:text-primary/80 transition-all'
          />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=''>
          <Sochial
            containerStyles='flex text-[24px] gap-x-8'
            iconStyles='hover:text-primary/80 transition-all justify-center'
          />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=''>
          <Link
            href='#'
            className='relative w-[250px] h-[50px] flex transition-all '>
            <Image
              src={"/assets/header/logo.svg"}
              fill
              alt='logo'
              className='object-contain'
            />
          </Link>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

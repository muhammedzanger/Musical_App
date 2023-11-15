/** @format */
"use client"

import SectionHeader from "./SectionHeader"
import { motion } from "framer-motion"
import { fadeIn } from "../../../varients"

const NewsLetter = () => {
  return (
    <section
      className='bg-newsLetter bg-fixed h-[488px] section bg-cover w-full bg-center bg-no-repeat'
      id='contact'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col h-full items-center justify-center'>
          <SectionHeader
            pretitle='Get In Touch'
            title='Sign up To Our Newsletter'
          />
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex items-center relative w-full max-w-xl'>
            <input
              type='text'
              placeholder='E-mail Address'
              className='w-full h-[64px] outline-none rounded-full bg-primary/60 backdrop-blur-[15px] px-8'
            />
            <button
              type='submit'
              className='bg-accent absolute right-2 rounded-full h-[46px] px-6 hover:bg-accent-hover transition-all text-[15px]'>
              Subscribe
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter

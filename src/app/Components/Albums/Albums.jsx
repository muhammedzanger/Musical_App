/** @format */
"use client"
import { motion } from "framer-motion"
import { fadeIn } from "../../../../varients"
import SectionHeader from "../SectionHeader"
import AlbumsSlider from "./AlbumsSlider"

const Albums = () => {
  return (
    <section className='' id='discography'>
      <div className='container mx-auto'>
        <SectionHeader pretitle='Discography' title='Popular Albums' />
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=''>
          <AlbumsSlider />
        </motion.div>
      </div>
    </section>
  )
}

export default Albums

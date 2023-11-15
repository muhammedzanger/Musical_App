/** @format */
"use client"

import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { fadeIn } from "../../../varients"
import Image from "next/image"

const locationSequence = [
  "town down, Cairo",
  3000,
  "Pyramids zone, Giza",
  3000,
  "El-Gouna, Hurghada",
  3000,
  "Blue hole Dahab, Sharm El-Shiekh",
  3000,
  "Castel Mohamed Ali, Cairo",
  3000,
  "North Coast, Alexandria",
  3000,
  "town down, Alexandria",
  3000,
  "town down, Zayed City",
  3000,
]
const hero = () => {
  return (
    <section className='h-[80vh] xl:h-[850px]' id='home'>
      <div className='container mx-auto h-full flex justify-center items-center xl:justify-start'>
        <div className='h-full flex flex-col justify-center items-center xl:items-start z-20 pt-12'>
          <MouseParallaxContainer
            globalFactoryX={0.1}
            globalFactoryY={0.2}
            resetOnLeave
            className='relative flex items-center h-[120px] xl:h-max xl:w-[840px]'>
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.4}
              className='relative'>
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className='w-[300px] h-[101.37px] xl:w-[725px] xl:h-[244.97px]'>
                <Image
                  src={"/assets/hero/typo-1.svg"}
                  fill
                  alt='img'
                  className='object-contain'
                />
              </motion.div>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.9}
              factorY={0.9}
              className='absolute z-30 xl:left-6'>
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className='w-[300px] h-[101.37px] xl:w-[625px] xl:h-[244.97px]'>
                <Image
                  src={"/assets/hero/typo-2.svg"}
                  fill
                  alt='img'
                  className='object-contain'
                />
              </motion.div>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.6}
              className='absolute z-30 xl:left-6'>
              <motion.div
                variants={fadeIn("left", 1.4)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className='w-[150px] h-[100px] xl:w-[248px] xl:h-[200px] mix-blend-luminosity'>
                <Image
                  src={"/assets/hero/bird.png"}
                  fill
                  alt='img'
                  className='object-contain'
                />
              </motion.div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
          <motion.div
            variants={fadeIn("up", 1)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='min-h-[60px] flex items-center mb-6 text-[26px]'>
            <div className='hidden xl:flex items-center xl:gap-x-0'>
              <div className=''>World</div>
              <div className='relative w-2 h-2 mx-2 flex items-center justify-center'>
                <Image src={"/assets/hero/dot.svg"} fill alt='img' />
              </div>
              <div className=''>Tour</div>
              <div className='relative w-2 h-2 mx-2 flex items-center justify-center'>
                <Image src={"/assets/hero/dot.svg"} fill alt='img' />
              </div>
              <div className=''>2023</div>
            </div>
            <div className='hidden xl:flex items-center justify-center relative w-7 h-7 mx-4'>
              <Image fill src={"/assets/hero/mic.svg"} alt='img' />
            </div>
            <TypeAnimation
              sequence={locationSequence}
              wrapper='div'
              speed={10}
              deletionSpeed={10}
              repeat={Infinity}
              cursor={false}
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 1.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=''>
            <button className='btn btn-lg btn-accent'>Get Tickets</button>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 1.4)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='hidden xl:flex absolute right-0 top-0 before:w-[784px] before:h-[893px]
        before:absolute before:right-0 before:top-0 before:bg-singerOverlay before:z-10'>
          <Image
            src={"/assets/hero/singer.png"}
            width={617}
            height={893}
            quality={100}
            priority
            alt='img'
          />
        </motion.div>
      </div>
    </section>
  )
}

export default hero

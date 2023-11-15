/** @format */
"use client"
import { AudioPlayer } from "react-audio-play"
import { motion } from "framer-motion"
import { fadeIn } from "../../../varients"
import Image from "next/image"

const Player = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial='hidden'
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className='flex items-center relative z-40 h-[112px] backdrop-blur-[15px] bg-gradient-to-r from-tertiary/70 to-primary/10'>
        <div className='container mx-auto flex flex-col justify-between items-center xl:flex-row'>
          <div className='hidden xl:flex items-center gap-x-4 w-[300px]'>
            <div className='w-16 h-16 relative'>
              <Image
                src={"/assets/player/avatar.png"}
                alt='img'
                fill
                priority
              />
            </div>
            <div className='leading-none'>
              <div className='text-lg font-medium'>Mia Reynolds</div>
              <div className='text-sm font-light'>Freedom</div>
            </div>
          </div>
          <div className='w-full max-w-4xl'>
            <AudioPlayer
              width={"100%"}
              src='/assets/freedom.mp3'
              loop
              preload='none'
              color='#fff'
              volume={50}
              volumePlacement='top'
              style={{
                background: "transparent",
                boxShadow: "none",
                width: "100%",
              }}
            />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Player

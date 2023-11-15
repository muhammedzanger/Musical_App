/** @format */
"use client"

import { BsArrowRight } from "react-icons/bs"
import { motion } from "framer-motion"
import { fadeIn } from "../../../../varients"
import Link from "next/link"

const PostList = ({ posts }) => {
  const getFirstThreePosts = posts.slice(0, 3)
  // console.log(getFirstThreePosts)
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial='hidden'
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className='flex flex-col items-center'>
      <div className='flex flex-col xl:flex-row justify-between gap-12 py-10 xl:pt-16 xl:pb-24 border-t border-white/10'>
        {getFirstThreePosts.map((post) => {
          const { id, data, description, title } = post
          // console.log(post)
          return (
            <div className='flex-1' key={id}>
              <div className='mb-1 text-accent font-bold'>{data}</div>
              <div className='text-xl mb-4 font-medium'>{title}</div>
              <p className='mb-6 font-light text-white/30'>{description}</p>
              <Link href='#' className=' flex items-center gap-x-2 group'>
                Read More
                <BsArrowRight className='text-xl group-hover:ml-1 transition-all' />
              </Link>
            </div>
          )
        })}
      </div>
      <button className='btn btn-lg btn-accent'>View All Posts</button>
    </motion.div>
  )
}

export default PostList

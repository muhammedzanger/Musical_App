/** @format */
// "use client"

import SectionHeader from "../SectionHeader"
import PostList from "./PostList"

const getPosts = async () => {
  const res = await fetch("http://localhost:4000/posts")
  return await res.json()
}

const Blog = async () => {
  const posts = await getPosts()
  console.log(posts)
  return (
    <section className='section' id='blog'>
      <div className='container mx-auto'>
        <SectionHeader pretitle='Our Blog' title='Latest News' />
        <PostList posts={posts} />
      </div>
    </section>
  )
}

export default Blog

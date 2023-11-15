/** @format */
"use client"
import React, { useContext } from "react"
import { NavContext } from "../Context/NavContext"
import { RiCloseLine } from "react-icons/ri"
import Nav from "./Nav"

const NavMobile = () => {
  const { isOpen, setIsOpen } = useContext(NavContext)
  return (
    <nav
      className={` ${
        isOpen ? "right-0" : "-right-full"
      } xl:hidden fixed bg-primary top-0 bottom-0  w-full z-20 transition-all duration-500`}>
      <div
        className='absolute top-5 right-4 cursor-pointer'
        onClick={() => setIsOpen(false)}>
        <RiCloseLine className='text-5xl' />
      </div>
      <Nav containerStyles='flex flex-col justify-center items-center text-[30px] uppercase font-bold h-full gap-y-8' />
    </nav>
  )
}

export default NavMobile

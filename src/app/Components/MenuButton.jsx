/** @format */

import React, { useContext } from "react"
import { NavContext } from "../Context/NavContext"

const MenuButton = () => {
  const { setIsOpen, isOpen } = useContext(NavContext)
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className='flex group items-end flex-col gap-y-2 cursor-pointer xl:hidden'>
      <div className='w-7 h-[2px] bg-white'></div>
      <div className='w-3.5 h-[2px] bg-white group-hover:w-7 transition-all'></div>
      <div className='w-7 h-[2px] bg-white'></div>
    </div>
  )
}

export default MenuButton

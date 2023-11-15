/** @format */
"use client"
import useSWR from "swr"

import { AudioPlayer } from "react-audio-play"

import { Swiper, SwiperSlide } from "swiper/react"

import { EffectCoverflow, Thumbs, FreeMode, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import Image from "next/image"
import { useState } from "react"

const fetcher = (url) => fetch(url).then((res) => res.json())

const AlbumsSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(true)

  const { data, error } = useSWR("http://localhost:4000/albums", fetcher)
  if (error) return "Failed To Fetch Data"
  if (!data) return "Loading..."

  return (
    <>
      <Swiper
        className='album-slider'
        effect={"coverflow"}
        speed={1000}
        spaceBetween={80}
        allowTouchMove={false}
        thumbs={{
          swiper: thumbsSwiper,
        }}
        modules={{ FreeMode, Thumbs, Navigation, EffectCoverflow }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}>
        {data.map((item, i) => {
          return (
            <SwiperSlide key={item.id} className='mb-12'>
              <div className='w-full bg-secondary/80 rounded-[10px] flex flex-col xl:flex-row items-center p-6 xl:p-12 gap-x-12'>
                <div className='hidden xl:flex w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] relative cursor-pointer overflow-hidden rounded-[10px]'>
                  <Image
                    src={item.img}
                    fill
                    alt='img'
                    priority
                    className='object-contain'
                  />
                </div>
                <div className='flex flex-1 w-full h-[500px]'>
                  <div className='flex flex-1 flex-col xl:px-12'>
                    {item.tracks?.map((track, index) => {
                      return (
                        <div
                          key={index}
                          className='flex flex-1 h-[500px] w-full'>
                          <div className='flex flex-1 items-center gap-x-2 capitalize font-semibold xl:font-extrabold'>
                            <div className='text-accent text-sm xl:text-lg'>
                              0{index + 1}
                            </div>
                            <div className='text-sm xl:text-base'>
                              {track.name}
                            </div>
                          </div>
                          <div className=''>
                            <AudioPlayer
                              style={{
                                background: "transparent",
                                boxShadow: "none",
                                width: "100%",
                              }}
                              src={track.src}
                              loop
                              preload='none'
                              color='#fff'
                              volume={40}
                              volumePlacement='bottom'
                              className='album-player'
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1310: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={20}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        className='thumb-slider'>
        {data?.map((thumb, index) => {
          return (
            <SwiperSlide
              key={index}
              className='relative group overflow-hidden border-2 border-transparent w-[254px] rounded-[10px]'>
              <div className='relative h-[195px] w-[195px] sm:w-[360px] sm:h-[360px] md:w-[240px] md:max-h-[240px] cursor-pointer'>
                <Image
                  src={thumb.img}
                  fill
                  alt='img'
                  priority
                  className='object-contain group group-hover:scale-185 transition-all duration-300'
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default AlbumsSlider

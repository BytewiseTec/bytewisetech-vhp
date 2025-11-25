'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'


import 'swiper/css'
import 'swiper/css/pagination'

import image1 from '@/public/assets/images/team/sir khan1.png'
import image2 from '@/public/assets/images/team/sir ismaeel.jpg'
import image3 from '@/public/assets/images/team/sir daniyal2.png'

export default function TeamSwiper() {
  const teamMembers = [
    { name: 'Daniyal Ashraf', title: 'Founder & CEO', image: image3.src },
    { name: 'Muhammad Khan', title: 'Co-Founder and CTO', image:image1.src },
    { name: 'Ismaeel Haider', title: 'Co-Founder and Managing Director', image: image2.src },
   
  ]

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      pagination={{ clickable: true }}
      grabCursor={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        320: { 
          slidesPerView: 1,
          spaceBetween: 15 
        },
        480: { 
          slidesPerView: 1,
          spaceBetween: 18 
        },
        640: { 
          slidesPerView: 2,
          spaceBetween: 20 
        },
        768: { 
          slidesPerView: 2,
          spaceBetween: 22 
        },
        1024: { 
          slidesPerView: 3,
          spaceBetween: 25 
        },
        1280: { 
          slidesPerView: 3,
          spaceBetween: 30 
        },
        1536: { 
          slidesPerView: 4,
          spaceBetween: 30 
        }
      }}
    >
      {teamMembers.map((member, idx) => (
      <SwiperSlide key={idx}>
  <div className="bg-white rounded-lg  shadow text-center w-full max-w-xs mx-auto">
    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
      <Image
        src={member.image}
        alt={member.name}
        width={600}
        height={600}
        className="w-full h-full object-cover"
      />
    </div>

    <h3 className="font-semibold text-lg ">{member.name}</h3>
    <p className="text-gray-500 py-2">{member.title}</p>
  </div>
</SwiperSlide>
      ))}
    </Swiper>
  )
}
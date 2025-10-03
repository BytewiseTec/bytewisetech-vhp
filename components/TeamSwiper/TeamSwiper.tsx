'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function TeamSwiper() {
  const teamMembers = [
    { name: "Daniyal", title: "Founder & CEO", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60" },
    { name: "Muhammad Khan", title: "Co-Founder and CTO", image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=500&auto=format&fit=crop&q=60" },
    { name: "Ismaeel Haider", title: "Co-Founder and Managing Director", image: "https://images.unsplash.com/photo-1583692331501-5339b76cbf1e?w=500&auto=format&fit=crop&q=60" },
    // { name: "John Doe", title: "Fullstack Developer", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60" },
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
          <div className="bg-white rounded-lg shadow p-5 text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-3 object-cover"
            />
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-gray-500">{member.title}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
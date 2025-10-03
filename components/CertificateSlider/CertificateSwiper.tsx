'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import './CertificateSwiper.css'

import image1 from '../../public/assets/images/awards/Bitmap.webp'
import image2 from '../../public/assets/images/awards/allaboutapps.webp'
import image3 from '../../public/assets/images/awards/awards-12.webp'
import image4 from '../../public/assets/images/awards/softwareworld.webp'
import image5 from '../../public/assets/images/awards/td-mobile.webp'
import image6 from '../../public/assets/images/awards/techimply-new.webp'

export default function CertificatesSwiper() {
  const certificates = [
    image1.src,
    image2.src,
    image3.src,
    image4.src,
    image5.src,
    image6.src,
  ]

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={4} // Default 4 cards
      grabCursor={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      breakpoints={{
        320: { 
          slidesPerView: 1, // Mobile: 1 card
          spaceBetween: 20 
        },
        640: { 
          slidesPerView: 2, // Tablet: 2 cards
          spaceBetween: 25 
        },
        1024: { 
          slidesPerView: 4, // Desktop: 4 cards (updated from 3 to 4)
          spaceBetween: 30 
        },
      }}
    >
      {certificates.map((cert, idx) => (
        <SwiperSlide key={idx}>
          <div className="cert-card text-center">
            <img
              src={cert}
              alt={`Certificate ${idx + 1}`}
              className="cert-img rounded mb-3"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
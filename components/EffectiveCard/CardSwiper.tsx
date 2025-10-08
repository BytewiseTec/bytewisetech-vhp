'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Autoplay } from 'swiper/modules'

import image1 from '@/public/assets/images/clients/client_logo_1.webp'
import image2 from '@/public/assets/images/clients/client_logo_2.webp'
import image3 from '@/public/assets/images/clients/client_logo_3.webp'
import image4 from '@/public/assets/images/clients/client_logo_4.webp'
import image5 from '@/public/assets/images/clients/client_logo_5.webp'
import image6 from '@/public/assets/images/clients/client_logo_6.webp'
import image7 from '@/public/assets/images/clients/client_logo_7.webp'
import image8 from '@/public/assets/images/clients/client_logo_8.webp'
import image9 from '@/public/assets/images/clients/client_logo_9.webp'
import image10 from '@/public/assets/images/clients/client_logo_10.webp'

import 'swiper/css'
import 'swiper/css/effect-cards'

const slides = [
  { id: 1, title: 'Slide 1', image: image1.src },
  { id: 2, title: 'Slide 2', image: image2.src },
  { id: 3, title: 'Slide 3', image: image3.src },
  { id: 4, title: 'Slide 4', image: image4.src },
  { id: 5, title: 'Slide 5', image: image5.src },
  { id: 6, title: 'Slide 6', image: image6.src },
  { id: 7, title: 'Slide 7', image: image7.src },
  { id: 8, title: 'Slide 8', image: image8.src },
  { id: 9, title: 'Slide 9', image: image9.src },
  { id: 10, title: 'Slide 10', image: image10.src },
]

const CardSwiper: React.FC = () => {
  return (
    <div className="card-swiper-wrapper">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              backgroundColor: 'white',
              background:
                'linear-gradient(135deg, #1e3a8a, #3b82f6, #1e40af) padding-box, linear-gradient(135deg, #1e3a8a, #3b82f6, #1e40af) border-box',
              border: '1px solid transparent',
            }}
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '4 / 5',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center',
                  display: 'block',
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


      <style jsx>{`
        .card-swiper-wrapper {
          width: 320px;
          background-color: white;
          border-radius: 20px;
          overflow: visible;
          transition: all 0.3s ease;
        }

        @media (max-width: 992px) {
          .card-swiper-wrapper {
            width: 280px;
          }
        }

        @media (max-width: 768px) {
          .card-swiper-wrapper {
            width: 240px;
          }
        }

        @media (max-width: 576px) {
          .card-swiper-wrapper {
            width: 200px;
          }
        }
      `}</style>
    </div>
  )
}

export default CardSwiper

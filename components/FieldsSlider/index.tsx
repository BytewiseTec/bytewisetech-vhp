'use client'

import Link from 'next/link'
import { PiArrowUpRightBold } from 'react-icons/pi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useEffect, useRef } from 'react'

interface Field {
  _id: string;
  name: string;
  slug: string;
}

interface FieldsSliderProps {
  fields: Field[];
}

export default function FieldsSlider({ fields }: FieldsSliderProps) {
  const swiperRef = useRef<any>(null)

  useEffect(() => {
    // Update slides to equal height after render
    const updateHeight = () => {
      if (swiperRef.current) {
        // Reset heights
        const slides = swiperRef.current.querySelectorAll('.swiper-slide')
        slides.forEach((slide: HTMLElement) => {
          slide.style.height = 'auto'
        })

        // Get maximum height
        let maxHeight = 0
        slides.forEach((slide: HTMLElement) => {
          const height = slide.offsetHeight
          maxHeight = Math.max(maxHeight, height)
        })

        // Set equal heights
        slides.forEach((slide: HTMLElement) => {
          slide.style.height = `${maxHeight}px`
        })
      }
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [fields])

  return (
    <div className="position-relative px-4" ref={swiperRef}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          enabled: true,
          hideOnClick: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          480: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 1.6,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        className="py-4 fields-swiper"
      >
        {fields.map((field) => (
          <SwiperSlide key={field._id} className="h-auto">
            <div className="card border-0 shadow-sm hover-shadow transition d-flex flex-column h-100 bg-dark">
              <div className="card-body p-5 d-flex align-items-center justify-content-center text-center">
                <a className="fields-card__link" href={`/fields/${field.slug}`} title={field.name}>
                  <h3 className="fields-card__title fw-bold text-white mb-0">
                    {field.name}
                  </h3>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper {
          padding-bottom: 50px !important;
        }
        .fields-swiper .swiper-button-next,
        .fields-swiper .swiper-button-prev {
          color: var(--bs-primary);
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .fields-swiper .swiper-button-next:after,
        .fields-swiper .swiper-button-prev:after {
          font-size: 20px;
        }
        .fields-card__link {
          text-decoration: none;
          display: inline-flex;
          width: 100%;
          justify-content: center;
        }
        .fields-card__title {
          font-size: clamp(1.5rem, 4vw, 2.25rem);
          line-height: 1.25;
          letter-spacing: -0.01em;
          text-wrap: balance;
        }
        .swiper-pagination {
          bottom: 0 !important;
        }
        .swiper-pagination-bullet-active {
          background: var(--bs-primary);
        }
        .hover-shadow {
          transition: all 0.3s ease;
        }
        .hover-shadow:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.1) !important;
        }
        .swiper-slide {
          height: auto !important;
          display: flex;
        }
        .swiper-slide > div {
          height: 100%;
          width: 100%;
        }
        @media (max-width: 991.98px) {
          .fields-swiper {
            margin-inline: -1.5rem;
          }
          .fields-card__title {
            font-size: clamp(1.35rem, 4.5vw, 2rem);
          }
        }

        @media (max-width: 767.98px) {
          .fields-swiper .swiper-button-next,
          .fields-swiper .swiper-button-prev {
            display: none;
          }
          .fields-swiper .swiper-slide > div {
            margin-inline: auto;
            max-width: 95%;
          }
          .fields-card__title {
            font-size: clamp(1.25rem, 6vw, 1.85rem);
          }
        }
      `}</style>
    </div>
  )
}

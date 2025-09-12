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
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        className="py-4"
      >
        {fields.map((field) => (
          <SwiperSlide key={field._id} className="h-auto">
            <div className="card border-0 shadow-sm hover-shadow transition d-flex flex-column h-100">
              <div className="card-body p-4 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="h5 mb-0  fw-bold" style={{color:'#020842'}}>{field.name}</h3>
                  <Link href={`/fields/${field.slug}`} className="btn btn-sm btn-outline-primary rounded-circle flex-shrink-0" title={field.name}>
                    <PiArrowUpRightBold size={18} />
                  </Link>
                </div>
                <p className="card-text text-muted mb-0 flex-grow-1">
                  Specialized solutions and expertise in {field.name.toLowerCase()} development and implementation.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper {
          padding-bottom: 50px !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: var(--bs-primary);
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
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
      `}</style>
    </div>
  )
}

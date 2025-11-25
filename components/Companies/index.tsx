'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

import styles from './Companies.module.css'

import clientLogo1 from '@/public/assets/images/companies/Amazon_Web_Services-Logo.wine.png'
import clientLogo2 from '@/public/assets/images/companies/Microsoft_Azure-Logo.wine.png'
import clientLogo3 from '@/public/assets/images/companies/Microsoft-Logo.wine.png'
import clientLogo4 from '@/public/assets/images/companies/Cloudflare-Logo.wine.png'
import clientLogo5 from '@/public/assets/images/companies/Google-Logo.wine.png'
import clientLogo6 from '@/public/assets/images/companies/n8n-logo-hd.png'
import clientLogo7 from '@/public/assets/images/companies/SAP_SE-Logo.wine.png'
import clientLogo8 from '@/public/assets/images/companies/Meta_Platforms-Logo.wine.png'


const companyLogos = [
  { id: 1, logo: clientLogo1, alt: 'Company 1' },
  { id: 2, logo: clientLogo2, alt: 'Company 2' },
  { id: 3, logo: clientLogo3, alt: 'Company 3' },
  { id: 4, logo: clientLogo4, alt: 'Company 4' },
  { id: 5, logo: clientLogo5, alt: 'Company 5' },
  { id: 6, logo: clientLogo6, alt: 'Company 6' },
  { id: 7, logo: clientLogo7, alt: 'Company 7' },
  { id: 8, logo: clientLogo8, alt: 'Company 8' },
]

export default function Companies() {
  return (
    <section className={styles.companiesSection}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={`${styles.headingWrapper} text-center`}>
              <div
                className="heading_focus_text has_underline d-inline-flex mb-3"
                style={{ backgroundImage: 'url(\'/assets/images/shapes/shape_title_under_line.svg\')' }}
              >
                Our Partners
              </div>
              <h2>
                Trusted by <mark>Leading Companies</mark>
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.carouselWrapper}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1200}
            grabCursor={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 28,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 32,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 36,
              },
            }}
            className={styles.swiperContainer}
          >
            {companyLogos.map((company) => (
              <SwiperSlide key={company.id}>
                <div className={styles.logoItem}>
                  <Image
                    src={company.logo}
                    alt={company.alt}
                    width={160}
                    height={100}
                    className={styles.logoImage}
                    priority={false}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}


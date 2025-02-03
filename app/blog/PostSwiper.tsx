'use client'

import { useRef } from 'react'
import { FaAnglesLeft, FaAnglesRight, FaCalendarDays } from 'react-icons/fa6'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'

import { BlogPostSlide } from './query'

interface PostSwiperProps {
  posts: BlogPostSlide[]
}

const PostSwiper: React.FC<PostSwiperProps> = ({ posts }) => {
  const swiper = useRef<SwiperRef | null>(null)

  return (
    <Swiper
      ref={swiper}
      modules={[Pagination]}
      className="blog_onecol_carousel"
      slidesPerView={1}
      spaceBetween={30}
      pagination={{ clickable: true, el: '.b1cc-swiper-pagination' }}
      navigation={{
        nextEl: '.b1cc-swiper-button-next',
        prevEl: '.b1cc-swiper-button-prev',
      }}
    >
      {posts.map((post) => (
        <SwiperSlide key={post._id}>
          <div className="blog_post_block content_over_layout">
            <div className="blog_post_image">
              <Link className="image_wrap" href={`/blog/${post.slug}`} title={post.title}>
                {post.banner && (
                  <Image
                    src={post.banner.url}
                    alt={post.banner.title}
                    width={post.banner.width}
                    height={post.banner.height}
                  />
                )}
              </Link>
            </div>
            <div className="blog_post_content">
              <div className="post_meta_wrap">
                <ul className="category_btns_group unordered_list">
                  {post.tags.map((tag) => (
                    <li key={tag}><a href="#!">{tag}</a></li>
                  ))}
                </ul>
                <ul className="post_meta unordered_list">
                  <li>
                    <a href="#!">
                      <FaCalendarDays /> {dayjs(post.publishedDate).format('MMMM DD, YYYY')}
                    </a>
                  </li>
                </ul>
              </div>
              <h3 className="blog_post_title">
                <a href={`/blog/${post.slug}`}>
                  {post.title}
                </a>
              </h3>
              <p className="mb-0">
                {post.excerpt}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div slot="container-end">
        <button
          className="b1cc-swiper-button-prev"
          type="button"
          title="Previous"
          style={{ backgroundImage: 'url(\'/assets/images/shapes/shape_arrow_right.svg\')' }}
          onClick={() => swiper.current?.swiper.slidePrev()}
        >
          <FaAnglesLeft />
        </button>
        <button
          className="b1cc-swiper-button-next"
          type="button"
          title="Next"
          style={{ backgroundImage: 'url(\'/assets/images/shapes/shape_arrow_left.svg\')' }}
          onClick={() => swiper.current?.swiper.slideNext()}
        >
          <FaAnglesRight />
        </button>
        <div className="b1cc-swiper-pagination p-0"></div>
      </div>
    </Swiper>
  )
}

export default PostSwiper
